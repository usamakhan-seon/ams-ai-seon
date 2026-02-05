function Title() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#282a2e] text-[22px] text-nowrap tracking-[-0.2px] whitespace-pre">Business Periodic Reviews</p>
    </div>
  );
}

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

function RightActions() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="_Right actions">
      <ButtonSecondary />
      <ButtonSecondary1 />
    </div>
  );
}

function PageTitle() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full z-[2]" data-name="Page Title">
      <Title />
      <RightActions />
    </div>
  );
}

function InnerLayout() {
  return (
    <div className="relative shrink-0" data-name="inner-layout">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[4px] py-[8px] relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap whitespace-pre">Alerts</p>
      </div>
    </div>
  );
}

function TabNavigationItem() {
  return (
    <div className="relative shrink-0" data-name="_Tab Navigation Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <InnerLayout />
        <div className="absolute bg-[#3c72ff] bottom-[-3px] h-[2px] left-0 right-0" data-name="Border">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
        </div>
      </div>
    </div>
  );
}

function InnerLayout1() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[8px] relative shrink-0" data-name="inner-layout">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-nowrap whitespace-pre">Alert triggers</p>
    </div>
  );
}

function TabNavigationItem1() {
  return (
    <div className="relative shrink-0" data-name="_Tab Navigation Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <InnerLayout1 />
      </div>
    </div>
  );
}

function TabNavigation() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pb-[3px] pt-0 px-0 relative shrink-0 w-full z-[1]" data-name="Tab Navigation">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(20,21,23,0.1)] border-solid inset-0 pointer-events-none" />
      <TabNavigationItem />
      <TabNavigationItem1 />
    </div>
  );
}

export default function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] isolate items-start relative size-full" data-name="Page Header">
      <PageTitle />
      <TabNavigation />
    </div>
  );
}