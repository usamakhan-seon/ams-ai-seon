import svgPaths from "./svg-2jx5dlzxoj";

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

export default function TopBar() {
  return (
    <div className="relative size-full" data-name="Top Bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[8px] pt-[24px] px-[8px] relative size-full">
          <Symbol />
          <div className="flex flex-row items-center self-stretch">
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}