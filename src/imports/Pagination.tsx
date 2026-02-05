function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#97a0b4] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
    </div>
  );
}

function NoOfItems() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="No. of items">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#282a2e] text-[0px] text-[14px] text-nowrap whitespace-pre">
        1-100<span className="font-['Inter:Regular',sans-serif] font-normal text-[#525761]">{` of 8,162`}</span>
      </p>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px] z-[2]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-[16px]">
        <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
      </div>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-white h-[32px] opacity-40 relative rounded-[6px] shrink-0" data-name="Button (secondary)">
      <div className="content-stretch flex gap-[4px] h-[32px] isolate items-center justify-center overflow-clip px-[13px] py-px relative rounded-[inherit]">
        <Icon1 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap z-[1]">
          <p className="leading-[20px] whitespace-pre">Prev</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(20,21,23,0.18)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_-1px_rgba(0,0,0,0.18)]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px] z-[1]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-[16px]">
        <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
      </div>
    </div>
  );
}

function ButtonSecondary1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Button (secondary)">
      <div className="content-stretch flex gap-[4px] h-[32px] isolate items-center justify-center overflow-clip px-[13px] py-px relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap z-[2]">
          <p className="leading-[20px] whitespace-pre">Next</p>
        </div>
        <Icon2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(20,21,23,0.18)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_3px_-1px_rgba(0,0,0,0.18)]" />
    </div>
  );
}

function CurrentPage() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Current page">
      <ButtonSecondary />
      <ButtonSecondary1 />
    </div>
  );
}

export default function Pagination() {
  return (
    <div className="bg-white relative shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)] size-full" data-name="Pagination">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[24px] py-[8px] relative size-full">
          <NoOfItems />
          <CurrentPage />
        </div>
      </div>
    </div>
  );
}