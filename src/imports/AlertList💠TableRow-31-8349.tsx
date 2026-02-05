import imgAvatar from "figma:asset/e1dc9f359a793c2a72ea5a070087af806a70de18.png";
import imgAvatar1 from "figma:asset/7aa7b90dc681e6452aaa0acfbf0435e597627b48.png";

function MinHeight() {
  return (
    <div className="h-[56px] relative shrink-0 w-[0.001px]" data-name="_min-height">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[56px] w-[0.001px]" />
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
    <div className="relative shrink-0 w-full" data-name="cell-content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative w-full">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

function CellBodyCell() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Cell / Body Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-[40px]">
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
        <CellContent1 />
      </div>
    </div>
  );
}

function CellContent2() {
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
        <CellContent2 />
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

function CellContent3() {
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
        <CellContent3 />
      </div>
    </div>
  );
}

function CellContent4() {
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
        <CellContent4 />
      </div>
    </div>
  );
}

function CellContent5() {
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
        <CellContent5 />
      </div>
    </div>
  );
}

function CellContent6() {
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
        <CellContent6 />
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

function CellContent7() {
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
        <CellContent7 />
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

function CellContent8() {
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
        <CellContent8 />
      </div>
    </div>
  );
}

export default function AlertListTableRow() {
  return (
    <div className="bg-white content-stretch flex items-center pb-px pt-0 px-0 relative size-full" data-name="Alert / List 💠 Table Row">
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