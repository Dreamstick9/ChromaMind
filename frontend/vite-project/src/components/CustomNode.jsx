import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 12,
        width: 180,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: 16,
          marginBottom: 8,
        }}
      >
        {data.label}
      </div>

      <div
        style={{
          fontSize: 13,
          color: "#666",
        }}
      >
        Type: {data.typeName}
      </div>

      <div
        style={{
          marginTop: 10,
          fontSize: 12,
          color: "green",
        }}
      >
        ● Ready
      </div>

      <Handle
        type="target"
        position={Position.Left}
      />

      <Handle
        type="source"
        position={Position.Right}
      />
    </div>
  );
}