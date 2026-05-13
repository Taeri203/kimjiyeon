"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const areas = ["태전2동", "구암동", "국우동", "도남동", "기타"];
const categories = ["의료치유특구", "돌봄", "골목상권", "정주환경", "교육", "교통·기반시설", "친수공간", "역사문화", "기타"];

export function VoiceForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [startedAt] = useState(() => Date.now().toString());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    if (
      !String(form.get("name") || "").trim() ||
      !String(form.get("contact") || "").trim() ||
      !String(form.get("title") || "").trim() ||
      !String(form.get("message") || "").trim() ||
      form.get("agree") !== "on"
    ) {
      setError("필수 항목과 개인정보 수집 동의를 확인해 주세요.");
      return;
    }

    const message = String(form.get("message") || "").trim();
    if (message.length < 10) {
      setError("내용은 10자 이상 입력해 주세요.");
      return;
    }

    setError("");
    setSubmitting(true);

    const payload = {
      name: form.get("name"),
      phone: form.get("contact"),
      residence: form.get("area"),
      category: form.get("category"),
      location: form.get("location"),
      title: form.get("title"),
      content: form.get("message"),
      reply: form.get("reply") === "on",
      website: form.get("website"),
      startedAt: form.get("startedAt"),
    };

    try {
      const response = await fetch("/api/voice", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "의견 접수 중 오류가 발생했습니다.");
      }

      setSubmitted(true);
      event.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "의견 접수 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <input type="hidden" name="startedAt" value={startedAt} />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-black text-[#082A5A]">
            이름
            <input name="name" className="form-input" required />
          </label>
          <label className="grid gap-2 text-sm font-black text-[#082A5A]">
            연락처
            <input name="contact" className="form-input" required />
          </label>
          <label className="grid gap-2 text-sm font-black text-[#082A5A]">
            거주지
            <select name="area" className="form-input" required>
              {areas.map((area) => (
                <option key={area}>{area}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-[#082A5A]">
            분야
            <select name="category" className="form-input" required>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="grid gap-2 text-sm font-black text-[#082A5A]">
          위치
          <input name="location" className="form-input" placeholder="예: 운전면허시험장 인근" />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#082A5A]">
          제목
          <input name="title" className="form-input" required />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#082A5A]">
          내용
          <textarea name="message" className="form-input min-h-40" required minLength={10} />
        </label>
        <label className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm leading-6 text-[#344054]">
          <input type="checkbox" name="reply" className="mt-1" />
          답변을 희망합니다.
        </label>
        <label className="flex items-start gap-3 rounded-2xl bg-[#EAF4FF] p-4 text-sm leading-6 text-[#344054]">
          <input type="checkbox" name="agree" className="mt-1" required />
          김지연 선거사무소는 유권자 의견 접수 및 답변을 위해 이름, 연락처, 거주지, 의견 내용을 수집합니다. 수집된 정보는 의견 확인 및 답변 목적으로만 사용되며 목적 달성 시 파기됩니다.
        </label>
        {error ? <p className="text-sm font-bold text-[#E53935]">{error}</p> : null}
        <button
          type="submit"
          disabled={submitting}
          className="btn-base btn-primary flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={18} aria-hidden />
          {submitting ? "접수 중..." : "의견 남기기"}
        </button>
        <p className="text-sm leading-6 text-[#667085]">
          제출하신 의견은 선거사무소 담당자 이메일로 전달됩니다. 반복 제출이 의심되는 경우 제한될 수 있습니다.
        </p>
      </form>
      {submitted ? (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-[#082A5A]/70 p-4 backdrop-blur" role="dialog" aria-modal="true">
          <div className="max-w-md rounded-[2rem] bg-white p-7 text-center shadow-2xl">
            <CheckCircle2 className="mx-auto h-14 w-14 text-[#004EA2]" aria-hidden />
            <h3 className="mt-4 text-2xl font-black text-[#082A5A]">의견이 접수되었습니다</h3>
            <p className="mt-3 leading-7 text-[#667085]">김지연 선거사무소가 확인 후 공약과 현장점검에 반영하겠습니다.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="btn-base btn-primary mt-6">
              확인
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
