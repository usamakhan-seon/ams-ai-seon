import svgPaths from "./svg-q6o13r50vd";
import imgAvatar from "figma:asset/e1dc9f359a793c2a72ea5a070087af806a70de18.png";
import imgAvatar1 from "figma:asset/7aa7b90dc681e6452aaa0acfbf0435e597627b48.png";
import imgAvatar2 from "figma:asset/99781f3847234f6daec7a480e9ee90e45c902a27.png";

function TextInputContentPlaceholder() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Text Input Content / Placeholder">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-0 relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#97a0b4] text-[14px]">Search</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">search</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Button">
      <Icon />
    </div>
  );
}

function InlineActionSearch() {
  return (
    <div className="h-full relative shrink-0" data-name="Inline Action / Search">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center pl-0 pr-[8px] py-0 relative">
        <Button />
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-start p-px relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <TextInputContentPlaceholder />
      <InlineActionSearch />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[160px]" data-name="Text Input">
      <Field />
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Search Container">
      <TextInput />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre" data-name="Text">
      <p className="relative shrink-0 text-[#525761]">Status:</p>
      <p className="relative shrink-0 text-[#3c72ff]">Open</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#97a0b4] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">angle-down</p>
    </div>
  );
}

function FilterChipValue() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex gap-[4px] h-[32px] items-center pl-[12px] pr-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Filter Chip / Value">
      <Text />
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#97a0b4] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
    </div>
  );
}

function FilterChipValue1() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex gap-[4px] h-[32px] items-center pl-[12px] pr-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Filter Chip / Value">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#80899c] text-[14px] text-nowrap whitespace-pre">Trigger</p>
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#97a0b4] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">plus-circle</p>
    </div>
  );
}

function FilterChipAdd() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex gap-[4px] h-[32px] items-center pl-[8px] pr-[12px] py-0 relative rounded-[6px] shrink-0" data-name="Filter Chip / Add">
      <Icon3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#80899c] text-[14px] text-nowrap whitespace-pre">Add filter</p>
    </div>
  );
}

function SimpleFiltersRow() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Simple Filters Row">
      <FilterChipValue />
      <FilterChipValue1 />
      <FilterChipAdd />
    </div>
  );
}

function Leftside() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Leftside">
      <div className="size-full">
        <div className="content-stretch flex gap-[8px] items-start pl-0 pr-[24px] py-0 relative w-full">
          <SearchContainer />
          <SimpleFiltersRow />
        </div>
      </div>
    </div>
  );
}

function DateFilterItem() {
  return (
    <div className="content-stretch flex h-full items-center mr-[-1px] px-[13px] py-px relative rounded-bl-[6px] rounded-tl-[6px] shrink-0 z-[6]" data-name="_Date Filter Item">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#80899c] text-[14px] text-nowrap whitespace-pre">Custom</p>
    </div>
  );
}

function DateFilterItem1() {
  return (
    <div className="content-stretch flex h-full items-center mr-[-1px] px-[13px] py-px relative shrink-0 z-[5]" data-name="_Date Filter Item">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#80899c] text-[14px] text-nowrap whitespace-pre">Today</p>
    </div>
  );
}

function DateFilterItem2() {
  return (
    <div className="content-stretch flex h-full items-center mr-[-1px] px-[13px] py-px relative shrink-0 z-[4]" data-name="_Date Filter Item">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#80899c] text-[14px] text-nowrap whitespace-pre">7D</p>
    </div>
  );
}

function DateFilterItem3() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-full items-center mr-[-1px] px-[13px] py-px relative shrink-0 z-[3]" data-name="_Date Filter Item">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3c72ff] text-[14px] text-nowrap whitespace-pre">30D</p>
    </div>
  );
}

function DateFilterItem4() {
  return (
    <div className="content-stretch flex h-full items-center mr-[-1px] px-[13px] py-px relative shrink-0 z-[2]" data-name="_Date Filter Item">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#80899c] text-[14px] text-nowrap whitespace-pre">3M</p>
    </div>
  );
}

function DateFilterItem5() {
  return (
    <div className="content-stretch flex h-full items-center mr-[-1px] px-[13px] py-px relative rounded-br-[6px] rounded-tr-[6px] shrink-0 z-[1]" data-name="_Date Filter Item">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#80899c] text-[14px] text-nowrap whitespace-pre">12M</p>
    </div>
  );
}

function DateFilter() {
  return (
    <div className="content-stretch flex h-[32px] isolate items-start pl-0 pr-px py-0 relative shrink-0" data-name="Date Filter">
      <DateFilterItem />
      <DateFilterItem1 />
      <DateFilterItem2 />
      <DateFilterItem3 />
      <DateFilterItem4 />
      <DateFilterItem5 />
    </div>
  );
}

function SearchFilterBar() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Search & Filter Bar">
      <Leftside />
      <DateFilter />
    </div>
  );
}

function BaseCheckbox() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox />
    </div>
  );
}

function CellContent() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[40px] items-center px-[8px] py-0 relative w-full">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell() {
  return (
    <div className="relative shrink-0" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <CellContent />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[12px] left-1/2 not-italic text-[#c1c7d3] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] uppercase w-[12px]">sort</p>
    </div>
  );
}

function CellContent1() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#282a2e] text-[12px] text-nowrap tracking-[0.2px] uppercase whitespace-pre">user Full name</p>
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent1 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[12px] left-1/2 not-italic text-[#c1c7d3] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] uppercase w-[12px]">sort</p>
    </div>
  );
}

function CellContent2() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#282a2e] text-[12px] text-nowrap tracking-[0.2px] uppercase whitespace-pre">Created at</p>
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell2() {
  return (
    <div className="relative shrink-0" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <CellContent2 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[12px] left-1/2 not-italic text-[#c1c7d3] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] uppercase w-[12px]">sort</p>
    </div>
  );
}

function CellContent3() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#282a2e] text-[12px] text-nowrap tracking-[0.2px] uppercase whitespace-pre">Alert Trigger</p>
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent3 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[12px] left-1/2 not-italic text-[#c1c7d3] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] uppercase w-[12px]">sort</p>
    </div>
  );
}

function CellContent4() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#282a2e] text-[12px] text-nowrap tracking-[0.2px] uppercase whitespace-pre">Amount</p>
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell4() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent4 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[12px] left-1/2 not-italic text-[#c1c7d3] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] uppercase w-[12px]">sort</p>
    </div>
  );
}

function CellContent5() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#282a2e] text-[12px] text-nowrap tracking-[0.2px] uppercase whitespace-pre">ID</p>
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell5() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent5 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[12px] left-1/2 not-italic text-[#c1c7d3] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] uppercase w-[12px]">sort</p>
    </div>
  );
}

function CellContent6() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#282a2e] text-[12px] text-nowrap tracking-[0.2px] uppercase whitespace-pre">Deadline</p>
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell6() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent6 />
      </div>
    </div>
  );
}

function CellContent7() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[40px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#282a2e] text-[12px] text-nowrap tracking-[0.2px] uppercase whitespace-pre">Assigned to</p>
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell7() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent7 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[12px] left-1/2 not-italic text-[#c1c7d3] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] uppercase w-[12px]">sort</p>
    </div>
  );
}

function CellContent8() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-[40px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#282a2e] text-[12px] text-nowrap tracking-[0.2px] uppercase whitespace-pre">Status</p>
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function CellHeaderCell8() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Header Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent8 />
      </div>
    </div>
  );
}

function AlertListTableRow() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[21]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <CellHeaderCell />
      <CellHeaderCell1 />
      <CellHeaderCell2 />
      <CellHeaderCell3 />
      <CellHeaderCell4 />
      <CellHeaderCell5 />
      <CellHeaderCell6 />
      <CellHeaderCell7 />
      <CellHeaderCell8 />
    </div>
  );
}

function MinHeight() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox1() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox1 />
    </div>
  );
}

function CellContent9() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox1 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent9 />
      </div>
    </div>
  );
}

function CellContent10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Briony Mueller</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent10 />
      </div>
    </div>
  );
}

function CellContent11() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:12:42</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell2() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent11 />
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Large transaction</p>
    </div>
  );
}

function CellContent12() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent12 />
      </div>
    </div>
  );
}

function CellContent13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">10,038.00 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell4() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent13 />
      </div>
    </div>
  );
}

function CellContent14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#a8f3...g9h6</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell5() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent14 />
      </div>
    </div>
  );
}

function CellContent15() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="h-[20px] w-full" />
      </div>
    </div>
  );
}

function CellBodyCell6() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent15 />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar} width="24" />
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar1} width="24" />
    </div>
  );
}

function CellContent16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Albert Flores</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell7() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent16 />
      </div>
    </div>
  );
}

function Lozenge() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell8() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent17 />
      </div>
    </div>
  );
}

function AlertListTableRow1() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-20" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight />
      <CellBodyCell />
      <CellBodyCell1 />
      <CellBodyCell2 />
      <CellBodyCell3 />
      <CellBodyCell4 />
      <CellBodyCell5 />
      <CellBodyCell6 />
      <CellBodyCell7 />
      <CellBodyCell8 />
    </div>
  );
}

function MinHeight1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox2() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox2 />
    </div>
  );
}

function CellContent18() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox2 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell9() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent18 />
      </div>
    </div>
  );
}

function CellContent19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">John Smith</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent19 />
      </div>
    </div>
  );
}

function CellContent20() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:13:18</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell11() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent20 />
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">PEP list match</p>
    </div>
  );
}

function CellContent21() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag1 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent21 />
      </div>
    </div>
  );
}

function CellContent22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">392.79 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell13() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent22 />
      </div>
    </div>
  );
}

function CellContent23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#k1l7...p0q2</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell14() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent23 />
      </div>
    </div>
  );
}

function CellContent24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">8 hours left</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell15() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent24 />
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_25_29078)" id="Avatar">
          <g id="Avatar_2">
            <path d={svgPaths.p1c665200} fill="var(--fill-0, #FFAB91)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p153e6600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p24871800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path d={svgPaths.p37064bf0} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <circle cx="12" cy="12" id="Border" r="11.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_25_29078">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CellContent25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar1 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Jenny Wilson</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell16() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent25 />
      </div>
    </div>
  );
}

function Lozenge1() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge1 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell17() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent26 />
      </div>
    </div>
  );
}

function AlertListTableRow2() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[19]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight1 />
      <CellBodyCell9 />
      <CellBodyCell10 />
      <CellBodyCell11 />
      <CellBodyCell12 />
      <CellBodyCell13 />
      <CellBodyCell14 />
      <CellBodyCell15 />
      <CellBodyCell16 />
      <CellBodyCell17 />
    </div>
  );
}

function MinHeight2() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox3() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox3 />
    </div>
  );
}

function CellContent27() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox3 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell18() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent27 />
      </div>
    </div>
  );
}

function CellContent28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Mary Richards</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent28 />
      </div>
    </div>
  );
}

function CellContent29() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:13:29</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell20() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent29 />
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Rapid movement of funds</p>
    </div>
  );
}

function CellContent30() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag2 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent30 />
      </div>
    </div>
  );
}

function CellContent31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">1382.56 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell22() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent31 />
      </div>
    </div>
  );
}

function CellContent32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#x5y9...w4v1</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell23() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent32 />
      </div>
    </div>
  );
}

function CellContent33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">9 hours left</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell24() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent33 />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar} width="24" />
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar1} width="24" />
    </div>
  );
}

function CellContent34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar2 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Albert Flores</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell25() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent34 />
      </div>
    </div>
  );
}

function Lozenge2() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge2 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell26() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent35 />
      </div>
    </div>
  );
}

function AlertListTableRow3() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[18]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight2 />
      <CellBodyCell18 />
      <CellBodyCell19 />
      <CellBodyCell20 />
      <CellBodyCell21 />
      <CellBodyCell22 />
      <CellBodyCell23 />
      <CellBodyCell24 />
      <CellBodyCell25 />
      <CellBodyCell26 />
    </div>
  );
}

function MinHeight3() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox4() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox4 />
    </div>
  );
}

function CellContent36() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox4 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell27() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent36 />
      </div>
    </div>
  );
}

function CellContent37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Bob Simons</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent37 />
      </div>
    </div>
  );
}

function CellContent38() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:16:04</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell29() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent38 />
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Rapid movement of funds</p>
    </div>
  );
}

function CellContent39() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag3 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent39 />
      </div>
    </div>
  );
}

function CellContent40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">438.00 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell31() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent40 />
      </div>
    </div>
  );
}

function CellContent41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#b6m3...d7e0</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell32() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent41 />
      </div>
    </div>
  );
}

function CellContent42() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="h-[20px] w-full" />
      </div>
    </div>
  );
}

function CellBodyCell33() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent42 />
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_25_29078)" id="Avatar">
          <g id="Avatar_2">
            <path d={svgPaths.p1c665200} fill="var(--fill-0, #FFAB91)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p153e6600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p24871800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path d={svgPaths.p37064bf0} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <circle cx="12" cy="12" id="Border" r="11.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_25_29078">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CellContent43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar3 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Jenny Wilson</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell34() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent43 />
      </div>
    </div>
  );
}

function Lozenge3() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge3 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell35() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent44 />
      </div>
    </div>
  );
}

function AlertListTableRow4() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[17]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight3 />
      <CellBodyCell27 />
      <CellBodyCell28 />
      <CellBodyCell29 />
      <CellBodyCell30 />
      <CellBodyCell31 />
      <CellBodyCell32 />
      <CellBodyCell33 />
      <CellBodyCell34 />
      <CellBodyCell35 />
    </div>
  );
}

function MinHeight4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox5() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox5 />
    </div>
  );
}

function CellContent45() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox5 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell36() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent45 />
      </div>
    </div>
  );
}

function CellContent46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Peter Jones</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent46 />
      </div>
    </div>
  );
}

function CellContent47() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:20:44</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell38() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent47 />
      </div>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Large transaction</p>
    </div>
  );
}

function CellContent48() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag4 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent48 />
      </div>
    </div>
  );
}

function CellContent49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">346.00 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell40() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent49 />
      </div>
    </div>
  );
}

function CellContent50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#j9k4...n6p3</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell41() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent50 />
      </div>
    </div>
  );
}

function CellContent51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#da3830] text-[14px]">47 minutes left</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell42() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent51 />
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar} width="24" />
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar1} width="24" />
    </div>
  );
}

function CellContent52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar4 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Albert Flores</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell43() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent52 />
      </div>
    </div>
  );
}

function Lozenge4() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent53() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge4 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell44() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent53 />
      </div>
    </div>
  );
}

function AlertListTableRow5() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[16]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight4 />
      <CellBodyCell36 />
      <CellBodyCell37 />
      <CellBodyCell38 />
      <CellBodyCell39 />
      <CellBodyCell40 />
      <CellBodyCell41 />
      <CellBodyCell42 />
      <CellBodyCell43 />
      <CellBodyCell44 />
    </div>
  );
}

function MinHeight5() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox6() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox6 />
    </div>
  );
}

function CellContent54() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox6 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell45() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent54 />
      </div>
    </div>
  );
}

function CellContent55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">James Ruskin</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent55 />
      </div>
    </div>
  );
}

function CellContent56() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:21:38</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell47() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent56 />
      </div>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">PEP list match</p>
    </div>
  );
}

function CellContent57() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag5 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent57 />
      </div>
    </div>
  );
}

function CellContent58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">6,091.28 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell49() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent58 />
      </div>
    </div>
  );
}

function CellContent59() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#r2s8...u0v7</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell50() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent59 />
      </div>
    </div>
  );
}

function CellContent60() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="h-[20px] w-full" />
      </div>
    </div>
  );
}

function CellBodyCell51() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent60 />
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_25_29078)" id="Avatar">
          <g id="Avatar_2">
            <path d={svgPaths.p1c665200} fill="var(--fill-0, #FFAB91)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p153e6600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p24871800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path d={svgPaths.p37064bf0} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <circle cx="12" cy="12" id="Border" r="11.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_25_29078">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CellContent61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar5 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Jenny Wilson</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell52() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent61 />
      </div>
    </div>
  );
}

function Lozenge5() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent62() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge5 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell53() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent62 />
      </div>
    </div>
  );
}

function AlertListTableRow6() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[15]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight5 />
      <CellBodyCell45 />
      <CellBodyCell46 />
      <CellBodyCell47 />
      <CellBodyCell48 />
      <CellBodyCell49 />
      <CellBodyCell50 />
      <CellBodyCell51 />
      <CellBodyCell52 />
      <CellBodyCell53 />
    </div>
  );
}

function MinHeight6() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox7() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox7 />
    </div>
  );
}

function CellContent63() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox7 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell54() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent63 />
      </div>
    </div>
  );
}

function CellContent64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Joan Smith</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent64 />
      </div>
    </div>
  );
}

function CellContent65() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:29:57</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell56() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent65 />
      </div>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Rapid movement of funds</p>
    </div>
  );
}

function CellContent66() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag6 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell57() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent66 />
      </div>
    </div>
  );
}

function CellContent67() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">1382.56 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell58() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent67 />
      </div>
    </div>
  );
}

function CellContent68() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#g4h6...k9l1</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell59() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent68 />
      </div>
    </div>
  );
}

function CellContent69() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">12 hours left</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell60() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent69 />
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar2} width="24" />
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(20, 21, 23, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" id="Border" r="11.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </svg>
      </div>
    </div>
  );
}

function CellContent70() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar6 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Darlene Robertson</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell61() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent70 />
      </div>
    </div>
  );
}

function Lozenge6() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent71() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge6 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell62() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent71 />
      </div>
    </div>
  );
}

function AlertListTableRow7() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[14]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight6 />
      <CellBodyCell54 />
      <CellBodyCell55 />
      <CellBodyCell56 />
      <CellBodyCell57 />
      <CellBodyCell58 />
      <CellBodyCell59 />
      <CellBodyCell60 />
      <CellBodyCell61 />
      <CellBodyCell62 />
    </div>
  );
}

function MinHeight7() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox8() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox8 />
    </div>
  );
}

function CellContent72() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox8 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell63() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent72 />
      </div>
    </div>
  );
}

function CellContent73() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">James Ruskin</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell64() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent73 />
      </div>
    </div>
  );
}

function CellContent74() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:38:07</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell65() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent74 />
      </div>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Rapid movement of funds</p>
    </div>
  );
}

function CellContent75() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag7 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell66() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent75 />
      </div>
    </div>
  );
}

function CellContent76() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">697.89 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell67() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent76 />
      </div>
    </div>
  );
}

function CellContent77() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#f5x2...z3w7</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell68() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent77 />
      </div>
    </div>
  );
}

function Lozenge7() {
  return (
    <div className="bg-[#e44f40] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[11px] text-nowrap text-white tracking-[0.4px] uppercase whitespace-pre">Overdue</p>
    </div>
  );
}

function CellContent78() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge7 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell69() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent78 />
      </div>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_25_29069)" id="Avatar">
          <g id="Avatar_2">
            <circle cx="12" cy="12" fill="var(--fill-0, #A5D6A7)" id="Vector" r="12" />
            <path d={svgPaths.p3cccb600} fill="var(--fill-0, #A5D6A7)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p3c59cf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p1087c500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
            <path d={svgPaths.pd5c8300} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
          <circle cx="12" cy="12" id="Border" r="11.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_25_29069">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CellContent79() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar7 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Jerome Bell</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell70() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent79 />
      </div>
    </div>
  );
}

function Lozenge8() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent80() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge8 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell71() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent80 />
      </div>
    </div>
  );
}

function AlertListTableRow8() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[13]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight7 />
      <CellBodyCell63 />
      <CellBodyCell64 />
      <CellBodyCell65 />
      <CellBodyCell66 />
      <CellBodyCell67 />
      <CellBodyCell68 />
      <CellBodyCell69 />
      <CellBodyCell70 />
      <CellBodyCell71 />
    </div>
  );
}

function MinHeight8() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox9() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox9 />
    </div>
  );
}

function CellContent81() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox9 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell72() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent81 />
      </div>
    </div>
  );
}

function CellContent82() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Bob Simons</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell73() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent82 />
      </div>
    </div>
  );
}

function CellContent83() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:39:41</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell74() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent83 />
      </div>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Rapid movement of funds</p>
    </div>
  );
}

function CellContent84() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag8 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell75() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent84 />
      </div>
    </div>
  );
}

function CellContent85() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">138.79 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell76() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent85 />
      </div>
    </div>
  );
}

function CellContent86() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#n0m6...c8d1</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell77() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent86 />
      </div>
    </div>
  );
}

function CellContent87() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">7 hours left</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell78() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent87 />
      </div>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar} width="24" />
      <img alt="" className="block max-w-none size-full" height="24" src={imgAvatar1} width="24" />
    </div>
  );
}

function CellContent88() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar8 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Albert Flores</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell79() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent88 />
      </div>
    </div>
  );
}

function Lozenge9() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent89() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge9 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell80() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent89 />
      </div>
    </div>
  );
}

function AlertListTableRow9() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[12]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight8 />
      <CellBodyCell72 />
      <CellBodyCell73 />
      <CellBodyCell74 />
      <CellBodyCell75 />
      <CellBodyCell76 />
      <CellBodyCell77 />
      <CellBodyCell78 />
      <CellBodyCell79 />
      <CellBodyCell80 />
    </div>
  );
}

function MinHeight9() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox10() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox10 />
    </div>
  );
}

function CellContent90() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox10 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell81() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent90 />
      </div>
    </div>
  );
}

function CellContent91() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Mary Richards</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell82() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent91 />
      </div>
    </div>
  );
}

function CellContent92() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:43:25</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell83() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent92 />
      </div>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Large transaction</p>
    </div>
  );
}

function CellContent93() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag9 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell84() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent93 />
      </div>
    </div>
  );
}

function CellContent94() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">36.00 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell85() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent94 />
      </div>
    </div>
  );
}

function CellContent95() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#q9p4...s7t3</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell86() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent95 />
      </div>
    </div>
  );
}

function CellContent96() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="h-[20px] w-full" />
      </div>
    </div>
  );
}

function CellBodyCell87() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent96 />
      </div>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_25_29078)" id="Avatar">
          <g id="Avatar_2">
            <path d={svgPaths.p1c665200} fill="var(--fill-0, #FFAB91)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p153e6600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p24871800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path d={svgPaths.p37064bf0} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
          <circle cx="12" cy="12" id="Border" r="11.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_25_29078">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CellContent97() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar9 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Jenny Wilson</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell88() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent97 />
      </div>
    </div>
  );
}

function Lozenge10() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent98() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge10 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell89() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent98 />
      </div>
    </div>
  );
}

function AlertListTableRow10() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-[11]" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight9 />
      <CellBodyCell81 />
      <CellBodyCell82 />
      <CellBodyCell83 />
      <CellBodyCell84 />
      <CellBodyCell85 />
      <CellBodyCell86 />
      <CellBodyCell87 />
      <CellBodyCell88 />
      <CellBodyCell89 />
    </div>
  );
}

function MinHeight10() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function BaseCheckbox11() {
  return <div className="absolute bg-white border border-[#d3d7e1] border-solid inset-0 rounded-[6px]" data-name="_base / Checkbox" />;
}

function Checkbox11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <BaseCheckbox11 />
    </div>
  );
}

function CellContent99() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox11 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell90() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
        <CellContent99 />
      </div>
    </div>
  );
}

function CellContent100() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">John Smith</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell91() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <CellContent100 />
      </div>
    </div>
  );
}

function CellContent101() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">08/08/24</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">18:44:52</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell92() {
  return (
    <div className="relative shrink-0 w-[130px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[130px]">
        <CellContent101 />
      </div>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">PEP list match</p>
    </div>
  );
}

function CellContent102() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[4px] items-start p-[8px] relative w-full">
          <Tag10 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell93() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent102 />
      </div>
    </div>
  );
}

function CellContent103() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">12,800.00 USD</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell94() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent103 />
      </div>
    </div>
  );
}

function CellContent104() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">#q9p4...s7t3</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell95() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[120px]">
        <CellContent104 />
      </div>
    </div>
  );
}

function CellContent105() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="h-[20px] w-full" />
      </div>
    </div>
  );
}

function CellBodyCell96() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent105 />
      </div>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_25_29069)" id="Avatar">
          <g id="Avatar_2">
            <circle cx="12" cy="12" fill="var(--fill-0, #A5D6A7)" id="Vector" r="12" />
            <path d={svgPaths.p3cccb600} fill="var(--fill-0, #A5D6A7)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p3c59cf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p1087c500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
            <path d={svgPaths.pd5c8300} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
          <circle cx="12" cy="12" id="Border" r="11.5" stroke="var(--stroke-0, #141517)" strokeOpacity="0.1" />
        </g>
        <defs>
          <clipPath id="clip0_25_29069">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CellContent106() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Avatar10 />
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">Jerome Bell</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell97() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent106 />
      </div>
    </div>
  );
}

function Lozenge11() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex h-[18px] items-center px-[4px] py-px relative rounded-[3px] shrink-0" data-name="Lozenge">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#3c72ff] text-[11px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">Open</p>
    </div>
  );
}

function CellContent107() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Lozenge11 />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell98() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent107 />
      </div>
    </div>
  );
}

function AlertListTableRow11() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative shrink-0 w-full z-10" data-name="Alert / List 💠 Table Row">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <MinHeight10 />
      <CellBodyCell90 />
      <CellBodyCell91 />
      <CellBodyCell92 />
      <CellBodyCell93 />
      <CellBodyCell94 />
      <CellBodyCell95 />
      <CellBodyCell96 />
      <CellBodyCell97 />
      <CellBodyCell98 />
    </div>
  );
}

function DataGrid() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Data Grid">
      <AlertListTableRow />
      <AlertListTableRow1 />
      <AlertListTableRow2 />
      <AlertListTableRow3 />
      <AlertListTableRow4 />
      <AlertListTableRow5 />
      <AlertListTableRow6 />
      <AlertListTableRow7 />
      <AlertListTableRow8 />
      <AlertListTableRow9 />
      <AlertListTableRow10 />
      <AlertListTableRow11 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative size-full">
          <SearchFilterBar />
          <DataGrid />
        </div>
      </div>
    </div>
  );
}