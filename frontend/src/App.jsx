import { useCallback } from "react";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./App.css";



const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "Turbine Sensor" },
  },
  {
    id: "2",
    position: { x: 400, y: 100 },
    data: { label: "Moving Average Filter" },
  },
  {
    id: "3",
    position: { x: 700, y: 100 },
    data: { label: "SMS Alert" },
  },
];


const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
  },
];

function App() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);


 const onConnect = useCallback(
  (connection) =>
    setEdges((currentEdges) =>
      addEdge(connection, currentEdges)
    ),
  [setEdges]
); 
 return (
<div className="app-container">
  <header className="app-header">
    <h1>NexusFlow</h1>
  </header>

    <ReactFlow
  style={{ height: "calc(100vh - 65px)" }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
       >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>

  </div>
);
}

export default App;