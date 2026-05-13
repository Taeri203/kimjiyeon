"use client";

import { useState } from "react";

const areas = ["태전2동", "구암동", "국우동", "도남동", "기타"];
const categories = ["의료치유특구", "돌봄", "골목상권", "정주환경", "교육", "교통·기반시설", "친수공간", "역사문화", "기타"];

export function VoiceForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!form.get("name") || !form.get("contact") || !form.get("title") || !form.get("message") || form.get("agree") !== "on") {
      setError("필수 항목과 개인정보 수집 동의를 확인해 주세요.");
      return;
    }
    setError("");
    setSubmitted(true);
    event.currentTarget.reset();
  }
  return <><form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm"><div className="grid gap-4 md:grid-cols-2"><label className="grid gap-2 text-sm font-black text-[#082A5A]">이름<input name="name" className="form-input" /></label><label className="grid gap-2 text-sm font-black text-[#082A5A]">연락처<input name="contact" className="form-input" /></label><label className="grid gap-2 text-sm font-black text-[#082A5A]">거주지<select name="area" className="form-input">{areas.map((area) => <option key={area}>{area}</option>)}</select></label><label className="grid gap-2 text-sm font-black text-[#082A5A]">분야<select name="category" className="form-input">{categories.map((category) => <option key={category}>{category}</option>)}</select></label></div><label className="grid gap-2 text-sm font-black text-[#082A5A]">위치<input name="location" className="form-input" placeholder="예: 운전면허시험장 인근" /></label><label className="grid gap-2 text-sm font-black text-[#082A5A]">제목<input name="title" className="form-input" /></label><label className="grid gap-2 text-sm font-black text-[#082A5A]">내용<textarea name="message" className="form-input min-h-40" /></label><label className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm leading-6 text-[#344054]"><input type="checkbox" name="reply" className="mt-1" />답변을 희망합니다.</label><label className="flex items-start gap-3 rounded-2xl bg-[#EAF4FF] p-4 text-sm leading-6 text-[#344054]"><input type="checkbox" name="agree" className="mt-1" />김지연 선거사무소는 유권자 의견 접수 및 답변을 위해 이름, 연락처, 거주지, 의견 내용을 수집합니다. 수집된 정보는 의견 확인 및 답변 목적으로만 사용되며 목적 달성 시 파기됩니다.</label>{error ? <p className="text-sm font-bold text-[#E53935]">{error}</p> : null}<button type="submit" className="btn-base btn-primary">의견 접수 준비하기</button></form>{submitted ? <div className="fixed inset-0 z-[100] grid place-items-center bg-[#082A5A]/70 p-4 backdrop-blur" role="dialog" aria-modal="true"><div className="max-w-md rounded-[2rem] bg-white p-7 text-center shadow-2xl"><h3 className="text-2xl font-black text-[#082A5A]">의견이 접수될 준비가 되었습니다.</h3><p className="mt-3 leading-7 text-[#667085]">실제 운영 시 김지연 캠프가 확인 후 공약과 현장점검에 반영하겠습니다.</p><button type="button" onClick={() => setSubmitted(false)} className="btn-base btn-primary mt-6">확인</button></div></div> : null}</>;
}
