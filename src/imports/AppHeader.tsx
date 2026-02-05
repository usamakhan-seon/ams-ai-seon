function BreadcrumbItem() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="_Breadcrumb Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#525761] text-[12px] text-nowrap whitespace-pre">Alerts</p>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Breadcrumb">
      <BreadcrumbItem />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#c1c7d3] text-[12px] text-nowrap whitespace-pre">/</p>
      <BreadcrumbItem />
    </div>
  );
}

function Leftside() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Leftside">
      <Breadcrumb />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">bell</p>
    </div>
  );
}

function NotificationButton() {
  return (
    <div className="content-stretch flex items-start p-[8px] relative rounded-[6px] shrink-0" data-name="Notification Button">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">circle-question</p>
    </div>
  );
}

function HelpButton() {
  return (
    <div className="content-stretch flex items-start p-[8px] relative rounded-[6px] shrink-0" data-name="Help Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[16px] left-1/2 not-italic text-[#80899c] text-[16px] text-center top-[calc(50%-8px)] translate-x-[-50%] w-[16px]">user</p>
    </div>
  );
}

function ProfileButton() {
  return (
    <div className="content-stretch flex items-start p-[8px] relative rounded-[6px] shrink-0" data-name="Profile Button">
      <Icon2 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Buttons">
      <NotificationButton />
      <HelpButton />
      <ProfileButton />
    </div>
  );
}

export default function AppHeader() {
  return (
    <div className="bg-white relative shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)] size-full" data-name="App Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[4px] relative size-full">
          <Leftside />
          <Buttons />
        </div>
      </div>
    </div>
  );
}