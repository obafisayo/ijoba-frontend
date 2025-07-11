import React from "react";
import { useRef, useEffect, useState } from "react";

const Dashboard = ({ messages, input, setInput, handleSend }) => {
	const messagesEndRef = useRef(null);
	const textareaRef = useRef(null);
	const [type, setType] = useState(false);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	// Auto-resize textarea based on content
	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, [input]);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!input.trim()) return;
		setType(true);
		handleSend(e);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleFormSubmit(e);
		}
	};

	return (
		<div style={{
			flex: 1,
			display: "flex",
			flexDirection: "column",
			height: "100vh",
			background: "#132541"
		}}>
			<div style={{
				display: "flex",
				alignItems: "center",
				padding: "20px 24px",
				background: "#132541"
			}}>
				<figure style={{
					width: "50px",
					height: "fit-content",
					margin: 0,
					marginRight: "16px"
				}}>
					<img 
						src={"logo"} 
						alt="aisha logo" 
						style={{
							width: "100%",
							height: "100%"
						}}
					/>
				</figure>
				<div style={{
					fontWeight: 600,
					color: "#e87a64",
					fontSize: 24
				}}>
					AiSHA - Insurance Copilot
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
