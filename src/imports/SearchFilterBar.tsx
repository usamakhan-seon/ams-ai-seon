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

export default function SearchFilterBar() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full" data-name="Search & Filter Bar">
      <Leftside />
      <DateFilter />
    </div>
  );
}