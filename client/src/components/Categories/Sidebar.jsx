import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const categories = [
  {
    name: "Computer Electronics",
    subcategories: ["Laptops", "Desktops", "Workstations", "Servers", "Accessories"],
  },
  { name: "Processor", subcategories: ["Intel", "AMD"] },
  { name: "Memory", subcategories: ["4GB", "8GB", "16GB"] },
  // Add more categories as needed
];

const Sidebar = () => {
  const [open, setOpen] = useState({});

  const handleToggle = (category) => {
    setOpen((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <List
      sx={{
        height: "100%", // Prevent overflow
        // overflowY: "auto",
        padding: 1, // Reduce padding for compact sidebar
        backgroundColor: "#f8f9fa",
        borderRight: "1px solid #ddd",
      }}
    >
      {categories.map((category) => (
        <div key={category.name}>
          <ListItemButton onClick={() => handleToggle(category.name)}>
            <ListItemText primary={category.name} />
            {open[category.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[category.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.subcategories.map((sub) => (
                <ListItem key={sub} sx={{ pl: 4 }}>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default Sidebar;
