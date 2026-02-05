import svgPaths from "./svg-zgujy5n50i";

function MinHeight() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
    </div>
  );
}

function CellBodyCell() {
  return (
    <div className="h-[65px] relative shrink-0 w-[20px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[65px] items-start relative w-[20px]">
        <div className="basis-0 bg-[#3c72ff] grow min-h-px min-w-px shrink-0 w-[3px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function BaseCheckbox() {
  return (
    <div className="absolute bg-[#3c72ff] inset-0 rounded-[6px]" data-name="_base / Checkbox">
      <div className="absolute h-[10.485px] left-[2.91px] top-[4.75px] w-[14.021px]" data-name="Icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.p111b5180} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
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
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell1() {
  return (
    <div className="relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative">
        <CellContent />
      </div>
    </div>
  );
}

function CellContent1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">811d59dad4a7</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell2() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[180px]">
        <CellContent1 />
      </div>
    </div>
  );
}

function CellContent2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">64</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell3() {
  return (
    <div className="relative shrink-0 w-[100px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[100px]">
        <CellContent2 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[8px]" data-name="Dot">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(128, 137, 156, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #80899C)" id="Dot" r="4" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525761] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">APPROVE</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#525761] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]"></p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex h-[32px] items-center justify-between pl-[16px] pr-[12px] py-[4px] relative rounded-[99px] shrink-0 w-[124px]" data-name="Button">
      <Content />
      <Icon />
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

function CellContent3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <StateButton />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell4() {
  return (
    <div className="relative shrink-0 w-[140px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[140px]">
        <CellContent3 />
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Check later</p>
    </div>
  );
}

function CellContent4() {
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

function CellBodyCell5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <CellContent4 />
      </div>
    </div>
  );
}

function CellContent5() {
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
    <div className="relative shrink-0 w-[220px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[220px]">
        <CellContent5 />
      </div>
    </div>
  );
}

function CellContent6() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">Damian Pudlo</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">ad87asd6sd@assd.er</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
        <CellContent6 />
      </div>
    </div>
  );
}

function CellContent7() {
  return (
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center not-italic p-[8px] relative w-full">
          <p className="leading-[20px] relative shrink-0 text-[#525761] text-[14px] w-full">25/04/22</p>
          <p className="leading-[18px] relative shrink-0 text-[#80899c] text-[12px] w-full">9:59:32 PM</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell8() {
  return (
    <div className="relative shrink-0 w-[120px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[120px]">
        <CellContent7 />
      </div>
    </div>
  );
}

function CellContent8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="cell-content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">574,00 EUR</p>
        </div>
      </div>
    </div>
  );
}

function CellBodyCell9() {
  return (
    <div className="relative shrink-0 w-[128px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-[128px]">
        <CellContent8 />
      </div>
    </div>
  );
}

export default function TransactionsTableRow() {
  return (
    <div className="bg-[#f6f7f9] content-stretch flex items-center pb-px pt-0 px-0 relative size-full" data-name="Transactions 💠 Table Row">
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
      <CellBodyCell9 />
    </div>
  );
}