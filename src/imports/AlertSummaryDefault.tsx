import svgPaths from "./svg-tif0ayz3gy";
import imgAvatar from "figma:asset/c2f6b08141e74fa0691fba3d96ee52a48aec3b27.png";

function RightActionNone() {
  return <div className="absolute h-[40px] right-0 top-1/2 translate-y-[-50%] w-[117px]" data-name="Right Action / None" />;
}

function Lozenge() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function TitleLozenge() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-1/2 translate-y-[-50%]" data-name="Title + Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#282a2e] text-[18px] text-nowrap tracking-[-0.2px] whitespace-pre">Summary</p>
      <Lozenge />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Card Header">
      <RightActionNone />
      <TitleLozenge />
    </div>
  );
}

function Term() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Alert trigger</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#fcedec] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">PEP list match</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Tag />
    </div>
  );
}

function DataPointListItem() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term />
      <Content />
    </div>
  );
}

function Term1() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Assigned to</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Avatar">
      <img alt="" className="block max-w-none size-full" height="16" src={imgAvatar} width="16" />
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(20, 21, 23, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" id="Border" r="7.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Avatar />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">John Doe</p>
    </div>
  );
}

function DataPointListItem1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Data Point List Item">
      <Term1 />
      <Content1 />
    </div>
  );
}

function Term2() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Deadline</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">8 hours left</p>
    </div>
  );
}

function DataPointListItem2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term2 />
      <Content2 />
    </div>
  );
}

function DataPointList() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Data Point List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <DataPointListItem />
        <DataPointListItem1 />
        <DataPointListItem2 />
      </div>
    </div>
  );
}

function Term3() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Alert ID</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">dcc6...21de</p>
    </div>
  );
}

function DataPointListItem3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term3 />
      <Content3 />
    </div>
  );
}

function Term4() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Created at</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">08/08/2024 - 18:12:42</p>
    </div>
  );
}

function DataPointListItem4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term4 />
      <Content4 />
    </div>
  );
}

function DataPointList1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Data Point List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <DataPointListItem3 />
        <DataPointListItem4 />
      </div>
    </div>
  );
}

function DataPointLists() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Data Point Lists">
      <DataPointList />
      <DataPointList1 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Top">
      <CardHeader />
      <DataPointLists />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
    </div>
  );
}

function IconButtonTertiary() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Icon Button (tertiary)">
      <Icon />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap whitespace-pre">Transaction details</p>
      <IconButtonTertiary />
    </div>
  );
}

function Term5() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Full name</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Briony Muller</p>
    </div>
  );
}

function DataPointListItem5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term5 />
      <Content5 />
    </div>
  );
}

function Term6() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">User ID</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">aafde346a5fc</p>
    </div>
  );
}

function DataPointListItem6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term6 />
      <Content6 />
    </div>
  );
}

function Term7() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">AML hits</p>
    </div>
  );
}

function Lozenge1() {
  return (
    <div className="bg-[#fcedec] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#da3830] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Pep</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Lozenge1 />
    </div>
  );
}

function DataPointListItem7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Data Point List Item">
      <Term7 />
      <Content7 />
    </div>
  );
}

function Term8() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Account status</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">verified</p>
    </div>
  );
}

function DataPointListItem8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term8 />
      <Content8 />
    </div>
  );
}

function Term9() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Location</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">HU</p>
    </div>
  );
}

function DataPointListItem9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term9 />
      <Content9 />
    </div>
  );
}

function Term10() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Average transaction value</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">193,46 USD</p>
    </div>
  );
}

function DataPointListItem10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term10 />
      <Content10 />
    </div>
  );
}

function DataPointList2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Data Point List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <DataPointListItem5 />
        <DataPointListItem6 />
        <DataPointListItem7 />
        <DataPointListItem8 />
        <DataPointListItem9 />
        <DataPointListItem10 />
      </div>
    </div>
  );
}

function Term11() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Action type</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">purchase</p>
    </div>
  );
}

function DataPointListItem11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term11 />
      <Content11 />
    </div>
  );
}

function Term12() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Score</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">22</p>
    </div>
  );
}

function DataPointListItem12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term12 />
      <Content12 />
    </div>
  );
}

function Term13() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Transaction amount</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">2 273,12 USD</p>
    </div>
  );
}

function DataPointListItem13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term13 />
      <Content13 />
    </div>
  );
}

function Term14() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">State</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[8px]" data-name="Dot">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(228, 79, 64, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #E44F40)" id="Dot" r="4" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525761] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">DECLINE</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#525761] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]">angle-down</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fcedec] content-stretch flex h-[32px] items-center justify-between pl-[16px] pr-[12px] py-[4px] relative rounded-[99px] shrink-0 w-[124px]" data-name="Button">
      <Content14 />
      <Icon1 />
    </div>
  );
}

function StateButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="State Button">
      <Button />
    </div>
  );
}

function Content15() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <StateButton />
    </div>
  );
}

function DataPointListItem14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term14 />
      <Content15 />
    </div>
  );
}

function Term15() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Label</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Suspected fraud</p>
    </div>
  );
}

function DataPointListItem15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term15 />
      <Content16 />
    </div>
  );
}

function Term16() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[200px]" data-name="Term">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#282a2e] text-[14px]">Tags</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">AML hit</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">High risk transaction</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function DataPointListItem16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Data Point List Item">
      <Term16 />
      <Content17 />
    </div>
  );
}

function DataPointList3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Data Point List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <DataPointListItem11 />
        <DataPointListItem12 />
        <DataPointListItem13 />
        <DataPointListItem14 />
        <DataPointListItem15 />
        <DataPointListItem16 />
      </div>
    </div>
  );
}

function DataPointLists1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Data Point Lists">
      <DataPointList2 />
      <DataPointList3 />
    </div>
  );
}

function TriggerEvent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Trigger event">
      <Link />
      <DataPointLists1 />
    </div>
  );
}

function Top1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full z-[2]" data-name="Top">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[24px] items-center relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#da3830] text-[11px] tracking-[0.4px] uppercase">Alert</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_50_2930)" id="Avatar">
          <g id="Avatar_2">
            <circle cx="8" cy="8" fill="var(--fill-0, #A5D6A7)" id="Vector" r="8" />
            <path d={svgPaths.p28db2b80} fill="var(--fill-0, #A5D6A7)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p374a4900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p3c5d9df0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
            <path d={svgPaths.p1fdffc00} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
          <circle cx="8" cy="8" id="Border" r="7.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_50_2930">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center right-[-4.33px] rounded-[3px] size-[24px] top-[calc(50%-1px)] translate-y-[-50%]" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bottom">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#80899c] text-[12px]">In progress</p>
      <Avatar2 />
    </div>
  );
}

function Content18() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] w-full">Large transaction</p>
        <Bottom />
      </div>
    </div>
  );
}

function PreviewCard() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[255px] relative rounded-[6px] shrink-0" data-name="Preview card">
      <div aria-hidden="true" className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] isolate items-start min-w-[inherit] pb-[13px] pt-[9px] px-[17px] relative w-full">
          <Top1 />
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">link-simple</p>
    </div>
  );
}

function IconButtonTertiary1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Icon Button (tertiary)">
      <Icon2 />
    </div>
  );
}

function LinkButton() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link button">
      <IconButtonTertiary1 />
    </div>
  );
}

function Top2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full z-[2]" data-name="Top">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3c72ff] text-[11px] tracking-[0.4px] uppercase">Case</p>
        <LinkButton />
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Bottom">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#80899c] text-[12px]">Ready for SAR</p>
    </div>
  );
}

function Content19() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] w-full">Case 08082024181318</p>
        <Bottom1 />
      </div>
    </div>
  );
}

function PreviewCard1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[255px] relative rounded-[6px] shrink-0" data-name="Preview card">
      <div aria-hidden="true" className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] isolate items-start min-w-[inherit] pb-[13px] pt-[9px] px-[17px] relative w-full">
          <Top2 />
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function LinkButton1() {
  return <div className="shrink-0 size-[24px]" data-name="Link button" />;
}

function Top3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full z-[2]" data-name="Top">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[24px] items-center relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3c72ff] text-[11px] tracking-[0.4px] uppercase">Case</p>
        <LinkButton1 />
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_50_2920)" id="Avatar">
          <g id="Avatar_2">
            <path d={svgPaths.p30769300} fill="var(--fill-0, #FFAB91)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p3ffaadc0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p2bdbf600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path d={svgPaths.p9ae9b00} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <circle cx="8" cy="8" id="Border" r="7.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_50_2920">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center right-[-4.33px] rounded-[3px] size-[24px] top-[calc(50%-1px)] translate-y-[-50%]" data-name="Avatar">
      <Avatar3 />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Bottom">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#80899c] text-[12px]">Ready for SAR</p>
      <Avatar4 />
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] w-full">Brook T 202425</p>
        <Bottom2 />
      </div>
    </div>
  );
}

function PreviewCard2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[255px] relative rounded-[6px] shrink-0" data-name="Preview card">
      <div aria-hidden="true" className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] isolate items-start min-w-[inherit] pb-[13px] pt-[9px] px-[17px] relative w-full">
          <Top3 />
          <Content20 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <PreviewCard />
      <PreviewCard1 />
      <PreviewCard2 />
    </div>
  );
}

function Alert() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Alert">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap whitespace-pre">{`Associated alerts & cases for the same customer`}</p>
      <Container />
    </div>
  );
}

export default function AlertSummaryDefault() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Alert Summary / Default">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative size-full">
          <Top />
          <TriggerEvent />
          <Alert />
        </div>
      </div>
    </div>
  );
}