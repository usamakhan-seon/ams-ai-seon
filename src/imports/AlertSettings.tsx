function Title() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#282a2e] text-[18px] tracking-[-0.2px]">Settings</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#525761] text-[14px] text-right">ID 1000837</p>
    </div>
  );
}

function BaseToggle() {
  return (
    <div className="bg-[#3c72ff] h-[20px] relative rounded-[99px] shrink-0 w-[32px]" data-name="_base / Toggle">
      <div className="absolute flex items-center justify-center right-[2px] size-[16px] top-1/2 translate-y-[-50%]">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-white rounded-[99px] size-[16px]" data-name="Handler" />
        </div>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle">
      <BaseToggle />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-nowrap whitespace-pre">Turn on/off alert trigger</p>
    </div>
  );
}

function ToggleRuleEditor() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="_Toggle (rule editor)">
      <Toggle />
    </div>
  );
}

function FormFieldLabel() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[18px] not-italic pb-[4px] pt-0 px-0 relative shrink-0 text-[12px] text-nowrap w-full whitespace-pre" data-name="Form Field Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#525761]">Name</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#da3830]">*</p>
    </div>
  );
}

function TextInputContentValue() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Text Input Content / Value">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-0 relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">PEP list match</p>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-start p-px relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <TextInputContentValue />
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <FormFieldLabel />
      <Field />
    </div>
  );
}

function FormFieldLabel1() {
  return (
    <div className="content-stretch flex items-start pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Form Field Label">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[12px]">Description</p>
    </div>
  );
}

function TextInputContentEmpty() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Text Input Content / Empty">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-0 size-full" />
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-start p-px relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <TextInputContentEmpty />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <FormFieldLabel1 />
      <Field1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]">info-circle</p>
    </div>
  );
}

function FormFieldLabel2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full" data-name="Form Field Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Deadline</p>
      <Icon />
    </div>
  );
}

function TextInputContentValue1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Text Input Content / Value">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-0 relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#525761] text-[14px]">24</p>
        </div>
      </div>
    </div>
  );
}

function Suffix() {
  return (
    <div className="basis-0 bg-[#f6f7f9] content-stretch flex grow items-center justify-center min-h-px min-w-[38px] pl-[9px] pr-[8px] py-0 relative rounded-br-[5px] rounded-tr-[5px] shrink-0" data-name="Suffix">
      <div aria-hidden="true" className="absolute border-[#eceef2] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none rounded-br-[5px] rounded-tr-[5px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">hours</p>
    </div>
  );
}

function SuffixWrap() {
  return (
    <div className="h-full relative shrink-0" data-name="_Suffix Wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start justify-center relative">
        <Suffix />
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-start p-px relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <TextInputContentValue1 />
      <SuffixWrap />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[120px]" data-name="Text Input">
      <FormFieldLabel2 />
      <Field2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <TextInput1 />
      <TextInput2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]">info-circle</p>
    </div>
  );
}

function FormFieldLabel3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full z-[3]" data-name="Form Field Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Automatically assign to</p>
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]"></p>
    </div>
  );
}

function RemoveButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="_Remove Button">
      <Icon2 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip pl-[8px] pr-[2px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Marvin McKinney</p>
      <RemoveButton />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]"></p>
    </div>
  );
}

function RemoveButton1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="_Remove Button">
      <Icon3 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip pl-[8px] pr-[2px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Brooklyn Simmons</p>
      <RemoveButton1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]"></p>
    </div>
  );
}

function RemoveButton2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="_Remove Button">
      <Icon4 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip pl-[8px] pr-[2px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Ronald Richards</p>
      <RemoveButton2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]"></p>
    </div>
  );
}

function RemoveButton3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="_Remove Button">
      <Icon5 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip pl-[8px] pr-[2px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Arlene McCoy</p>
      <RemoveButton3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]"></p>
    </div>
  );
}

function RemoveButton4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="_Remove Button">
      <Icon6 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip pl-[8px] pr-[2px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Leslie Alexander</p>
      <RemoveButton4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]"></p>
    </div>
  );
}

function RemoveButton5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="_Remove Button">
      <Icon7 />
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip pl-[8px] pr-[2px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Kristin Watson</p>
      <RemoveButton5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]"></p>
    </div>
  );
}

function RemoveButton6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="_Remove Button">
      <Icon8 />
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#eceef2] content-stretch flex h-[24px] items-center overflow-clip pl-[8px] pr-[2px] py-0 relative rounded-[6px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Albert Flores</p>
      <RemoveButton6 />
    </div>
  );
}

function ContentTextInput() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="_Content / Text Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[24px] items-center px-[8px] py-[2px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#97a0b4] text-[14px]">Add more</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Row">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
      <Tag4 />
      <Tag5 />
      <Tag6 />
      <ContentTextInput />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="_Content">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[38px] items-start justify-center p-[4px] relative w-full">
          <Row />
        </div>
      </div>
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-white content-stretch flex items-start p-px relative rounded-[6px] shrink-0 w-full z-[2]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d3d7e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Content />
    </div>
  );
}

function ChipInput() {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative shrink-0 w-full" data-name="Chip Input">
      <FormFieldLabel3 />
      <Field3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[12px] left-1/2 not-italic text-[#80899c] text-[11px] text-center top-[calc(50%-6px)] translate-x-[-50%] w-[12px]">info-circle</p>
    </div>
  );
}

function FormFieldLabel4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-[4px] pt-0 px-0 relative shrink-0 w-full z-[3]" data-name="Form Field Label">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Alert checklist</p>
      <Icon9 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="_Content">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-0 relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#97a0b4] text-[14px]">Select checklist</p>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
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
          <Content1 />
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[566px]" data-name="Select">
      <FormFieldLabel4 />
      <Select />
    </div>
  );
}

function BaseCheckbox() {
  return <div className="bg-[#eceef2] rounded-[6px] shrink-0 size-[20px]" data-name="_base / Checkbox" />;
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-start opacity-40 relative shrink-0" data-name="Checkbox">
      <BaseCheckbox />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525761] text-[14px] text-nowrap whitespace-pre">Mandatory to fill checklist to close alert</p>
    </div>
  );
}

function CheckboxContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px pb-0 pt-[22px] px-0 relative shrink-0" data-name="Checkbox container">
      <Checkbox />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <Select1 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <CheckboxContainer />
      </div>
    </div>
  );
}

export default function AlertSettings() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Alert settings">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative size-full">
          <Title />
          <ToggleRuleEditor />
          <Container />
          <ChipInput />
          <Row1 />
        </div>
      </div>
    </div>
  );
}