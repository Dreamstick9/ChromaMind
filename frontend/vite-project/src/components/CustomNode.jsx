import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  return (
    <div className="w-64 rounded-xl border border-zinc-700 bg-zinc-900 p-4 shadow-xl">

      {/* Node Title */}
      <h2 className="text-lg font-semibold text-white">
        {data.label}
      </h2>

      {/* Node Type */}
      <p className="mt-1 text-sm text-zinc-400">
        {data.typeName}
      </p>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter prompt..."
        className="mt-4 w-full rounded-md border border-zinc-600 bg-zinc-800 px-3 py-2 text-sm text-white outline-none"
      />

      {/* Output */}
      <div className="mt-3 rounded-md bg-zinc-800 p-2 text-xs text-zinc-300">
        Output: Ready...
      </div>

      {/* Status */}
      <div className="mt-3 text-xs text-green-400">
        ● Active
      </div>

      {/* Incoming Handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="h-3 w-3 bg-blue-500"
      />

      {/* Outgoing Handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="h-3 w-3 bg-green-500"
      />
    </div>
  );
}