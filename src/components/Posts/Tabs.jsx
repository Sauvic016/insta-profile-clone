import React from "react";

const Tab = ({ active, onClick, icon, label }) => {
	return (
		<div style={{ fontWeight: active ? "500" : "" }} onClick={onClick}>
			{icon}
			<span>{label}</span>
		</div>
	);
};

export default Tab;
