function Title() {
  return (
    <div className="content-stretch flex items-center pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#282a2e] text-[18px] text-nowrap tracking-[-0.2px] whitespace-pre">Conditions</p>
    </div>
  );
}

function ListBox() {
  return (
    <div className="basis-0 bg-[#ebf1ff] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="List Box">
      <div aria-hidden="true" className="absolute border border-[#3c72ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[17px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-center w-full">Custom parameters</p>
        </div>
      </div>
    </div>
  );
}

function ListBox1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] self-stretch shrink-0" data-name="List Box">
      <div aria-hidden="true" className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[17px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-center w-full">Transaction’s state</p>
        </div>
      </div>
    </div>
  );
}

function ListBox2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] self-stretch shrink-0" data-name="List Box">
      <div aria-hidden="true" className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[17px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-center w-full">Transaction’s score</p>
        </div>
      </div>
    </div>
  );
}

function ListBox3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] self-stretch shrink-0" data-name="List Box">
      <div aria-hidden="true" className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[17px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-center w-full">Applied rule</p>
        </div>
      </div>
    </div>
  );
}

function ListBox4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="List Box">
      <div aria-hidden="true" className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[17px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-center w-full">AML monitoring</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="_Row 1">
      <ListBox />
      <ListBox1 />
      <ListBox2 />
      <ListBox3 />
      <ListBox4 />
    </div>
  );
}

function ChoiceCardList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Choice Card List">
      <Row />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1062px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap whitespace-pre">Type</p>
      <ChoiceCardList />
    </div>
  );
}

function Spacer() {
  return <div className="basis-0 grow min-h-px min-w-px self-stretch shrink-0" data-name="_spacer" />;
}

function TypeContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Type container">
      <Column />
      <Spacer />
    </div>
  );
}

function DividerHorizontal() {
  return <div className="bg-[#eceef2] h-px shrink-0 w-full" data-name="Divider (horizontal)" />;
}

function DividerContainer() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[32px] relative shrink-0 w-full" data-name="Divider container">
      <DividerHorizontal />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="_Content">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-0 relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#97a0b4] text-[14px]">Select a parameter type</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-[16px]">
        <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#525761] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">angle-down</p>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full z-[2]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[40px] items-center pl-px pr-[9px] py-px relative w-full">
          <Content />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
      <Select />
    </div>
  );
}

function Spacer1() {
  return <div className="basis-0 grow min-h-px min-w-px self-stretch shrink-0" data-name="_spacer" />;
}

function EditorContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Editor Container">
      <Select1 />
      <Spacer1 />
    </div>
  );
}

function ParameterContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Parameter container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap whitespace-pre">Add a new parameter</p>
      <EditorContainer />
    </div>
  );
}

function Operator() {
  return (
    <div className="content-stretch flex gap-[5px] h-[40px] items-center leading-[normal] relative shrink-0 text-nowrap whitespace-pre" data-name="Operator">
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#7c7a85] text-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AND
      </p>
      <p className="font-['Font_Awesome_5_Pro:Solid',sans-serif] not-italic relative shrink-0 text-[#cdced1] text-[10px] text-right"></p>
    </div>
  );
}

function ButtonTertiary() {
  return (
    <div className="content-stretch flex h-[24px] isolate items-center justify-center relative shrink-0" data-name="Button (tertiary)">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#da3830] text-[14px] text-nowrap whitespace-pre z-[1]">Clear all</p>
    </div>
  );
}

function OperatorContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Operator Container">
      <Operator />
      <ButtonTertiary />
    </div>
  );
}

function StructureLines() {
  return (
    <div className="h-[5px] relative shrink-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top">
      <StructureLines />
    </div>
  );
}

function StructureLines1() {
  return (
    <div className="h-full relative shrink-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] h-px left-[15px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[10px]" />
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[5px] h-[40px] items-center relative shrink-0" data-name="Left">
      <StructureLines1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7c7a85] text-[15px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AND
      </p>
      <p className="font-['Font_Awesome_5_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cdced1] text-[10px] text-nowrap text-right whitespace-pre"></p>
    </div>
  );
}

function ButtonTertiary1() {
  return (
    <div className="content-stretch flex h-[24px] isolate items-center justify-center relative shrink-0" data-name="Button (tertiary)">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#da3830] text-[14px] text-nowrap whitespace-pre z-[1]">Delete group</p>
    </div>
  );
}

function Operator1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Operator">
      <Left />
      <ButtonTertiary1 />
    </div>
  );
}

function StructureLines2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex flex-col h-[5px] items-start relative shrink-0 w-full" data-name="Top">
      <StructureLines2 />
    </div>
  );
}

function StructureLines3() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function StructureLines4() {
  return (
    <div className="absolute bottom-0 left-[35px] top-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] h-px left-[15px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[10px]" />
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#97a0b4] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Left Side">
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-nowrap whitespace-pre">PEP match is equal to true</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#3c72ff] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">edit</p>
    </div>
  );
}

function Parameter() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-center justify-between left-[70px] overflow-clip p-[10px] rounded-[5px] top-[5px] w-[1182px]" data-name="Parameter">
      <LeftSide />
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute right-0 size-[16px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#da3830] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">minus-circle</p>
    </div>
  );
}

function Field() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Field">
      <StructureLines3 />
      <StructureLines4 />
      <Parameter />
      <Icon3 />
    </div>
  );
}

function StructureLines5() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function StructureLines6() {
  return (
    <div className="absolute bottom-0 left-[35px] top-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] h-px left-[15px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[10px]" />
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#97a0b4] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]"></p>
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Left Side">
      <Icon4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-nowrap whitespace-pre">IP country is listed on High Risk Countries</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#3c72ff] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">edit</p>
    </div>
  );
}

function Parameter1() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-center justify-between left-[70px] overflow-clip p-[10px] rounded-[5px] top-[5px] w-[1182px]" data-name="Parameter">
      <LeftSide1 />
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute right-0 size-[16px] top-1/2 translate-y-[-50%]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#da3830] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">minus-circle</p>
    </div>
  );
}

function Field1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Field">
      <StructureLines5 />
      <StructureLines6 />
      <Parameter1 />
      <Icon6 />
    </div>
  );
}

function StructureLines7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-full" data-name="Bottom">
      <StructureLines7 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Top1 />
      <Field />
      <Field1 />
      <Bottom />
    </div>
  );
}

function StructureLines8() {
  return (
    <div className="h-full relative shrink-0 w-[35px]" data-name="Structure Lines">
      <div className="absolute bg-[#e1e1e1] bottom-0 left-[15px] top-0 w-px" />
    </div>
  );
}

function ButtonTertiary2() {
  return (
    <div className="content-stretch flex h-[24px] isolate items-center justify-center relative shrink-0" data-name="Button (tertiary)">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3c72ff] text-[14px] text-nowrap whitespace-pre z-[1]">Add group</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start px-[15px] py-[5px] relative shrink-0" data-name="Button">
      <ButtonTertiary2 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-row items-center self-stretch">
        <StructureLines8 />
      </div>
      <Button />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Group">
      <Top />
      <Operator1 />
      <Content1 />
      <Buttons />
    </div>
  );
}

function ParameterContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Parameter Container">
      <OperatorContainer />
      <Group />
    </div>
  );
}

function CurrentParameters() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Current parameters">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#282a2e] text-[14px] text-nowrap whitespace-pre">Current parameters</p>
      <ParameterContainer1 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Card">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative size-full">
          <Title />
          <TypeContainer />
          <DividerContainer />
          <ParameterContainer />
          <DividerContainer />
          <CurrentParameters />
        </div>
      </div>
    </div>
  );
}