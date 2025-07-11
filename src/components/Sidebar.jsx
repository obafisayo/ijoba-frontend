import React from "react";
import { useRef, useEffect } from "react";
import { 
	SIDEBAR_MIN_WIDTH, 
	SIDEBAR_MAX_WIDTH,
	// loadFromLS,
	// saveToLS,
	// LS_CHAT_HISTORY,
	// LS_ALL_MESSAGES,
	// LS_CURRENT_CHAT_ID
} from "../helpers/utils.js";
import TextLogo from "../assets/AirisTextLogo.png"
import Logo from "../assets/AirisLogo.svg"

const Sidebar = ({
	sidebarWidth,
	setSidebarWidth,
	isResizing,
	setIsResizing,
}) => {
	const sidebarRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!isResizing) return;
			const newWidth = Math.min(
				Math.max(e.clientX, SIDEBAR_MIN_WIDTH),
				SIDEBAR_MAX_WIDTH
			);
			setSidebarWidth(newWidth);
		};
		const handleMouseUp = () => setIsResizing(false);

		if (isResizing) {
			window.addEventListener("mousemove", handleMouseMove);
			window.addEventListener("mouseup", handleMouseUp);
		}
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isResizing, setSidebarWidth, setIsResizing]);

	
	const toggleSidebar = () => {
		setSidebarWidth(
			sidebarWidth === SIDEBAR_MIN_WIDTH
				? SIDEBAR_MAX_WIDTH
				: SIDEBAR_MIN_WIDTH
		);
	};

	return (
		<div
			ref={sidebarRef}
			style={{
				width: sidebarWidth,
				minWidth: SIDEBAR_MIN_WIDTH,
				maxWidth: SIDEBAR_MAX_WIDTH,
				background: "#fff",
				color: "#000000",
				display: "flex",
				flexDirection: "column",
				borderRight: "1px solid #222e3a",
				transition: isResizing ? "none" : "width 0.2s",
				position: "relative",
				zIndex: 2
			}}
		>
			<div
				style={{
					padding: "20px 4px",
					borderBottom: "1px solid #2d3748",
					fontWeight: 700,
					fontSize: 18,
					letterSpacing: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: sidebarWidth === SIDEBAR_MIN_WIDTH ? "center" : "flex-start",
					cursor: "pointer",
					userSelect: "none"
				}}
				onClick={toggleSidebar}
				title="Toggle sidebar"
			>
				{sidebarWidth === SIDEBAR_MIN_WIDTH ? (
					<figure className="w-12 h-12">
						<img className="" src={Logo} alt="logo-icon" />
					</figure>
				) : (
					<figure className="">
						<img src={TextLogo} alt="text-logo-icon" />
					</figure>
				)}
			</div>

			{sidebarWidth !== SIDEBAR_MIN_WIDTH && (
				<div style={{ flex: 1, overflowY: "auto" }}>

					
				</div>
			)}

			{/* Sidebar resizer */}
			<div
				onMouseDown={() => setIsResizing(true)}
				style={{
					width: 6,
					cursor: "col-resize",
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					zIndex: 10,
					background: "rgba(0,0,0,0.05)"
				}}
			/>
		</div>
	);
};

export default Sidebar;