import { useLoaderData, type Params } from "react-router";
import { LOGIC_ITEMS, type LogicItem } from "../data/logicItems";
import { PLAYGROUND_REGISTRY } from "../playground-views";
import PlaygroundFrame from "../components/common/PlaygroundFrame";
import EmptyCodeEditor from "../components/common/EmptyCodeEditor";

export async function playgroundLoader({
  params,
}: {
  params: Params<"logicId">;
}) {
  const item = LOGIC_ITEMS.find((i) => i.id === params.logicId);
  if (!item) {
    throw new Response("Playground Item Not Found", { status: 404 });
  }
  return { item };
}

export default function PlaygroundPage() {
  const { item } = useLoaderData() as { item: LogicItem };

  const ViewComponent =
    PLAYGROUND_REGISTRY[item.id] ||
    (() => (
      <div className="text-xs text-txt-secondary text-center py-10">
        Visual Scaffold under construction for {item.title}
      </div>
    ));

  return (
    <div className="space-y-6 font-poppins">
      {/* Description header */}
      <div className="mb-6 space-y-1">
        <h1 className="text-2xl font-semibold text-txt-main">{item.title}</h1>
        <p className="text-sm text-txt-secondary">{item.description}</p>
      </div>

      {/* Top UI Scaffold Preview Container */}
      <PlaygroundFrame title={item.title} categoryTitle={item.category}>
        <ViewComponent />
      </PlaygroundFrame>

      {/* Bottom Blank Code Editor Block */}
      <EmptyCodeEditor logicId={item.id} title={item.title} />
    </div>
  );
}
