import React from "react";

const Dashboard = () => {
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
				<div style={{
					fontWeight: 600,
					color: "#e87a64",
					fontSize: 24
				}}>
					Admin Dashboard
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
