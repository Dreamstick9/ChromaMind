import { useState, useCallback } from "react";

import ReactFlow, {
  addEdge,
  applyNodeChanges,
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";
import "./App.css";
import CustomNode from "./components/CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

export default function App() {
  // Nodes State
  const [nodes, setNodes] = useState([
    {
      id: "1",
      type: "custom",

      position: {
        x: 200,
        y: 150,
      },

      data: {
        label: "AI Model",
        typeName: "LLM Node",
      },
    },
  ]);

  // Edges State
  const [edges, setEdges] = useState([]);

  // Selected Node Type
  const [selectedType, setSelectedType] =
    useState("AI Model");

  // Handle Node Dragging
  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nds) =>
        applyNodeChanges(changes, nds)
      ),
    []
  );

  // Connect Nodes
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge(params, eds)),
    []
  );

  // Add New Node
  const addNode = () => {
    const nodeData = {
      "AI Model": {
        label: "AI Model",
        typeName: "LLM Node",
      },

      Webhook: {
        label: "Webhook",
        typeName: "Trigger Node",
      },

      Email: {
        label: "Email",
        typeName: "Action Node",
      },

      Database: {
        label: "Database",
        typeName: "Storage Node",
      },
    };

    const newNode = {
      id: Date.now().toString(),

      type: "custom",

      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },

      data: nodeData[selectedType],
    };

    setNodes((prev) => [...prev, newNode]);
  };

  return (
    <div className="app">
      <div className="topbar">
        <select
          value={selectedType}
          onChange={(e) =>
            setSelectedType(e.target.value)
          }
        >
          <option>AI Model</option>
          <option>Webhook</option>
          <option>Email</option>
          <option>Database</option>
        </select>

        <button onClick={addNode}>
          Add Node
        </button>
      </div>

      <div style={{ height: "90vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}

          onNodesChange={onNodesChange}
          onConnect={onConnect}

          nodeTypes={nodeTypes}

          nodesDraggable={true}
          nodesConnectable={true}

          panOnDrag={false}
          panOnScroll={true}

          zoomOnScroll={true}
          zoomOnPinch={true}

          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}