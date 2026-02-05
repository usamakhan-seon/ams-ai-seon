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

function Icon() {
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
          <Icon />
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

function Icon1() {
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
          <Icon1 />
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

function Icon2() {
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
          <Icon2 />
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

function Icon3() {
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
          <Icon3 />
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

function Icon4() {
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
          <Icon4 />
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

function Icon5() {
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
          <Icon5 />
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

function Icon6() {
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
          <Icon6 />
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

export default function AlertListTableRow() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative size-full" data-name="Alert / List 💠 Table Row">
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