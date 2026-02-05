import svgPaths from "./svg-8px2mj110g";

function Symbol() {
  return (
    <div className="h-[28px] relative shrink-0 w-[40px]" data-name="Symbol">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 28">
        <g id="Symbol">
          <path d={svgPaths.p1f857e00} fill="var(--fill-0, #00C1B6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Text">
      <div className="h-[15.474px] relative shrink-0 w-[51.971px]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 193, 182, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 16">
            <path d={svgPaths.p2094d280} fill="var(--fill-0, #00C1B6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top Bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[8px] pt-[24px] px-[8px] relative w-full">
          <Symbol />
          <div className="flex flex-row items-center self-stretch">
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">gauge-high</p>
    </div>
  );
}

function BaseSidebarItem() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">bars</p>
    </div>
  );
}

function BaseSidebarItem1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon1 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Transactions</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">user-group</p>
    </div>
  );
}

function BaseSidebarItem2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon2 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Customers</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#00c1b6] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
    </div>
  );
}

function BaseSidebarItem3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon3 />
          <p className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#00c1b6] text-[14px] text-nowrap whitespace-pre">Periodic Review</p>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">folder</p>
    </div>
  );
}

function BaseSidebarItem4() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon4 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Cases</p>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">hand-point-up</p>
    </div>
  );
}

function BaseSidebarItem5() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon5 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Manual Lookup</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">sack-dollar</p>
    </div>
  );
}

function BaseSidebarItem6() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon6 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">AML</p>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">address-card</p>
    </div>
  );
}

function BaseSidebarItem7() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon7 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">ID verification</p>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">money-bill-transfer</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute right-0 size-[12px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[11px] text-[rgba(255,255,255,0.64)] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]">arrow-up-right-from-square</p>
    </div>
  );
}

function Addition() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Addition">
      <Icon9 />
    </div>
  );
}

function BaseSidebarItem8() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon8 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Chargebacks</p>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Addition />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">calculator-simple</p>
    </div>
  );
}

function BaseSidebarItem9() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon10 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Scoring Engine</p>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">ballot</p>
    </div>
  );
}

function BaseSidebarItem10() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon11 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Lists</p>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">radar</p>
    </div>
  );
}

function BaseSidebarItem11() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon12 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Monitoring</p>
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">shop</p>
    </div>
  );
}

function BaseSidebarItem12() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon13 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Channels</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Group">
      <BaseSidebarItem />
      <BaseSidebarItem1 />
      <BaseSidebarItem2 />
      <BaseSidebarItem3 />
      <BaseSidebarItem4 />
      <BaseSidebarItem5 />
      <BaseSidebarItem6 />
      <BaseSidebarItem7 />
      <BaseSidebarItem8 />
      <BaseSidebarItem9 />
      <BaseSidebarItem10 />
      <BaseSidebarItem11 />
      <BaseSidebarItem12 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">wave-pulse</p>
    </div>
  );
}

function BaseSidebarItem13() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon14 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Logs</p>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">gear</p>
    </div>
  );
}

function BaseSidebarItem14() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon15 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Group">
      <BaseSidebarItem13 />
      <BaseSidebarItem14 />
    </div>
  );
}

function Spacer() {
  return <div className="basis-0 grow min-h-px min-w-px shrink-0 w-full" data-name="_spacer" />;
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[16px] text-center text-white top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
    </div>
  );
}

function BaseSidebarItem15() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="_base / Sidebar Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Icon16 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Collapse</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[8px] relative size-full">
          <Group />
          <Group1 />
          <Spacer />
          <BaseSidebarItem15 />
        </div>
      </div>
    </div>
  );
}

function BaseSidebar() {
  return (
    <div className="basis-0 bg-[#0a0a3d] content-stretch flex flex-col grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="_base / Sidebar">
      <TopBar />
      <Content />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Sidebar">
      <BaseSidebar />
    </div>
  );
}