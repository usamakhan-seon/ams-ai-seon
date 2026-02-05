function Icon() {
  return (
    <div className="relative shrink-0 size-[16px] z-[2]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-[16px]">
        <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
      </div>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Button (secondary)">
      <div className="content-stretch flex gap-[4px] h-[32px] isolate items-center justify-center overflow-clip px-[13px] py-px relative rounded-[inherit]">
        <Icon />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap z-[1]">
          <p className="leading-[20px] whitespace-pre">View settings</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(20,21,23,0.18)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_-1px_rgba(0,0,0,0.18)]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px] z-[2]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-[16px]">
        <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
      </div>
    </div>
  );
}

function ButtonSecondary1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Button (secondary)">
      <div className="content-stretch flex gap-[4px] h-[32px] isolate items-center justify-center overflow-clip px-[13px] py-px relative rounded-[inherit]">
        <Icon1 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap z-[1]">
          <p className="leading-[20px] whitespace-pre">Export</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(20,21,23,0.18)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_-1px_rgba(0,0,0,0.18)]" />
    </div>
  );
}

export default function RightActions() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative size-full" data-name="_Right actions">
      <ButtonSecondary />
      <ButtonSecondary1 />
    </div>
  );
}