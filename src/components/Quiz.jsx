import { useMemo, useState } from 'react';
import { Gauge, BatteryFull, Zap, Clock4, Car, Sparkles } from 'lucide-react';

export default function Quiz() {
  const questions = useMemo(
    () => [
      {
        id: 'priority',
        title: 'What matters most to you?',
        options: [
          { label: 'Maximum performance', value: 'performance', icon: Gauge },
          { label: 'Longest possible range', value: 'range', icon: BatteryFull },
          { label: 'Cutting‑edge tech & exclusivity', value: 'exclusive', icon: Sparkles },
        ],
      },
      {
        id: 'usage',
        title: 'How will you mostly use the car?',
        options: [
          { label: 'Track days & weekend blasts', value: 'track', icon: Zap },
          { label: 'Daily driving & trips', value: 'daily', icon: Clock4 },
          { label: 'Showcase & collector piece', value: 'collector', icon: Car },
        ],
      },
      {
        id: 'budget',
        title: 'What budget range are you considering?',
        options: [
          { label: 'Optimized value', value: 'value', icon: Gauge },
          { label: 'Premium build & features', value: 'premium', icon: Sparkles },
          { label: 'Top‑tier, limited Founders', value: 'founders', icon: Zap },
        ],
      },
    ],
    []
  );

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const total = questions.length;
  const progress = Math.round(((step) / total) * 100);

  const onSelect = (qid, val) => {
    const next = { ...answers, [qid]: val };
    setAnswers(next);
    if (step < total - 1) setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  // Simple scoring to suggest a model
  const result = useMemo(() => {
    if (Object.keys(answers).length < total) return null;

    let score = { standard: 0, founders: 0 };

    switch (answers.priority) {
      case 'performance':
        score.founders += 2;
        break;
      case 'range':
        score.standard += 2;
        break;
      case 'exclusive':
        score.founders += 3;
        break;
      default:
        break;
    }

    switch (answers.usage) {
      case 'track':
        score.founders += 2;
        break;
      case 'daily':
        score.standard += 2;
        break;
      case 'collector':
        score.founders += 2;
        break;
      default:
        break;
    }

    switch (answers.budget) {
      case 'value':
        score.standard += 2;
        break;
      case 'premium':
        score.founders += 1;
        score.standard += 1;
        break;
      case 'founders':
        score.founders += 3;
        break;
      default:
        break;
    }

    const model = score.founders > score.standard ? 'Founders Series' : 'Standard';
    const rationale =
      model === 'Founders Series'
        ? 'You lean toward maximum performance, exclusivity, and track‑oriented use. The Founders Series delivers top‑spec acceleration, premium materials, and limited availability.'
        : 'You prefer long‑range usability and day‑to‑day practicality without sacrificing supercar speed. The Standard configuration balances performance and value.';

    return { model, rationale };
  }, [answers, total]);

  return (
    <section id="quiz" className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(239,68,68,0.15),transparent),radial-gradient(900px_500px_at_50%_120%,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Find your Roadster</h2>
            <p className="mt-2 text-white/80 max-w-2xl">Answer a few quick questions and we’ll suggest the best Roadster configuration for your driving style.</p>
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-sm text-white/70">Progress</div>
            <div className="mt-2 h-2 w-40 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-red-600 transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {!result ? (
          <div className="mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-sm text-white/60">Question {step + 1} of {total}</div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-medium">{questions[step].title}</h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {questions[step].options.map((opt) => {
                  const Icon = opt.icon;
                  const selected = answers[questions[step].id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => onSelect(questions[step].id, opt.value)}
                      className={`group relative overflow-hidden rounded-xl border p-4 text-left transition-all ${
                        selected
                          ? 'border-red-500/60 bg-red-500/10'
                          : 'border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(239,68,68,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-start gap-3">
                        <div className="mt-1 rounded-lg bg-white/5 p-2 text-white/80"><Icon size={18} /></div>
                        <div>
                          <div className="font-medium">{opt.label}</div>
                          <div className="mt-1 text-xs text-white/60">Tap to select</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10 disabled:opacity-40"
                  disabled={step === 0}
                >
                  Back
                </button>
                <div className="text-white/60">Choose an option to continue</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-sm text-white/60">Your recommendation</div>
              <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">{result.model}</h3>
              <p className="mt-4 text-white/80 max-w-3xl">{result.rationale}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="text-sm text-white/60">Highlights</div>
                  <ul className="mt-2 list-disc pl-5 text-white/80 text-sm space-y-1">
                    {result.model === 'Founders Series' ? (
                      <>
                        <li>Peak acceleration and track‑focused tuning</li>
                        <li>Exclusive badging and limited allocation</li>
                        <li>Premium interior with extended carbon package</li>
                      </>
                    ) : (
                      <>
                        <li>Extended range for real‑world daily use</li>
                        <li>Blistering performance with optimal value</li>
                        <li>Comfort‑forward configuration and practicality</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="text-sm text-white/60">Next steps</div>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a href="#pricing" className="inline-flex items-center rounded-full bg-red-600 hover:bg-red-500 px-4 py-2 text-sm font-medium">See pricing</a>
                    <a href="#order" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-sm">Reserve now</a>
                    <button onClick={restart} className="inline-flex items-center rounded-full border border-white/10 bg-white/0 hover:bg-white/5 px-4 py-2 text-sm">Restart quiz</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
