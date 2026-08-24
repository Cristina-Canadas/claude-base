import { Fragment, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Copy } from "lucide-react";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { TIMELINE_STEPS } from "../../data/timeline";

const SCROLL_AMOUNT = 300;

function CopyRow({ value }: { value: string }) {
  const { copied, copy } = useCopyToClipboard();
  return (
    <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-ink-800 bg-ink-950 px-3 py-2">
      <code className="min-w-0 truncate font-mono text-xs text-ink-200">{value}</code>
      <button
        type="button"
        onClick={() => copy(value)}
        aria-label="Copiar comando"
        className="flex shrink-0 items-center gap-1 rounded-md p-1 text-ink-500 transition-colors hover:bg-ink-800 hover:text-ink-50"
      >
        {copied ? (
          <Check className="size-3.5 text-brand-400" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  );
}

export function TimelineSection() {
  const scrollerRef = useRef<HTMLOListElement>(null);
  const dragRef = useRef({ startX: 0, startScrollLeft: 0, moved: false });
  const velocityRef = useRef({ x: 0, t: 0, v: 0 });
  const momentumFrameRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  function stopMomentum() {
    if (momentumFrameRef.current !== null) {
      cancelAnimationFrame(momentumFrameRef.current);
      momentumFrameRef.current = null;
    }
  }

  function startMomentum(initialVelocity: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let velocity = initialVelocity;
    let lastTime: number | null = null;

    function step(now: number) {
      if (lastTime === null) lastTime = now;
      const dt = now - lastTime;
      lastTime = now;

      scroller!.scrollLeft -= velocity * dt;
      velocity *= Math.pow(0.94, dt / 16);

      if (Math.abs(velocity) < 0.02) {
        momentumFrameRef.current = null;
        return;
      }
      momentumFrameRef.current = requestAnimationFrame(step);
    }

    momentumFrameRef.current = requestAnimationFrame(step);
  }

  function scrollByAmount(direction: 1 | -1) {
    stopMomentum();
    scrollerRef.current?.scrollBy({
      left: direction * SCROLL_AMOUNT,
      behavior: "smooth",
    });
  }

  function handleMouseDown(event: React.MouseEvent<HTMLOListElement>) {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    stopMomentum();
    dragRef.current = {
      startX: event.pageX,
      startScrollLeft: scroller.scrollLeft,
      moved: false,
    };
    velocityRef.current = { x: event.pageX, t: performance.now(), v: 0 };
    setIsDragging(true);

    function handleMouseMove(moveEvent: MouseEvent) {
      const delta = moveEvent.pageX - dragRef.current.startX;
      if (Math.abs(delta) > 5) dragRef.current.moved = true;
      scroller!.scrollLeft = dragRef.current.startScrollLeft - delta;

      const now = performance.now();
      const dt = now - velocityRef.current.t;
      if (dt > 0) {
        velocityRef.current.v = (moveEvent.pageX - velocityRef.current.x) / dt;
      }
      velocityRef.current.x = moveEvent.pageX;
      velocityRef.current.t = now;
    }

    function handleMouseUp() {
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      if (Math.abs(velocityRef.current.v) > 0.05) {
        startMomentum(velocityRef.current.v);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleClickCapture(event: React.MouseEvent) {
    if (dragRef.current.moved) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <SectionContainer id="flujo" showBackground={false}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Flujo recomendado"
          title="Del cero al primer commit"
          description="Ocho pasos para preparar cualquier proyecto nuevo antes de empezar a construir de verdad."
        />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Pasos anteriores"
            className="flex size-9 items-center justify-center rounded-full bg-ink-900 text-ink-300 transition-colors hover:text-brand-400"
          >
            <ChevronLeft className="size-4.5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Siguientes pasos"
            className="flex size-9 items-center justify-center rounded-full bg-ink-900 text-ink-300 transition-colors hover:text-brand-400"
          >
            <ChevronRight className="size-4.5" />
          </button>
        </div>
      </div>

      <ol
        ref={scrollerRef}
        onMouseDown={handleMouseDown}
        onClickCapture={handleClickCapture}
        className={`mt-12 flex select-none snap-x snap-proximity gap-0 overflow-x-auto pb-6 pt-1 ${
          isDragging ? "cursor-grabbing snap-none" : "cursor-grab"
        }`}
      >
        {TIMELINE_STEPS.map((step, index) => (
          <Fragment key={step.id}>
            <motion.li
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
              className="flex w-[260px] shrink-0 snap-start flex-col sm:w-[280px]"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-800 bg-ink-900 text-brand-500">
                  <step.icon className="size-5" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-xs text-ink-500">
                  Paso {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-ink-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {step.description}
              </p>
              {step.code && <CopyRow value={step.code} />}
            </motion.li>

            {index < TIMELINE_STEPS.length - 1 && (
              <li
                aria-hidden
                className="flex w-8 shrink-0 items-center justify-center pt-[22px] text-ink-800 sm:w-10"
              >
                <ChevronRight className="size-5" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </SectionContainer>
  );
}
