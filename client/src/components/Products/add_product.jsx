import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { AddCircle, Delete , RemoveCircle} from "@mui/icons-material";
import { addProduct } from "../../service/api"; // Assuming your API call is here

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    stock: "",
    price: { MRP: "", cost: "", discountPercent: "" },
    warranty: "",
    ratings: { average: "", totalReviews: "" },
    highlights: [],
    specifications: [{heading:"",value:"",}],
    variants: [
      {
        screenSize: "",
        color: "",
        RAM: "",
        ROM: "",
        images: [], // Array for multiple images
      },
    ],
  });

  // General input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Price input handler
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      price: { ...formData.price, [name]: value },
    });
  };

  // Ratings input handler
  const handleRatingsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      ratings: { ...formData.ratings, [name]: value },
    });
  };

    // Add a new specification
    const handleAddSpecification = () => {
      setFormData((prevState) => ({
        ...formData,
        specifications: [...formData.specifications, { heading: "", value: "" }],
      }));
    };
  
    // Specification input change handler
    const handleSpecificationChange = (index, e) => {
      const { name, value } = e.target;
      setFormData((prevState) => {
        const updatedSpecifications = [...prevState.specifications];
        updatedSpecifications[index][name] = value;
        return { ...prevState, specifications: updatedSpecifications };
      });
    };
  
    // Remove a specification
    const handleRemoveSpecification = (index) => {
      setFormData((prevState) => ({
        ...prevState,
        specifications: prevState.specifications.filter((_, i) => i !== index),
      }));
    };
  // Add new variant
  const handleAddVariant = () => {
    setFormData({
      ...formData,
      variants: [
        ...formData.variants,
        { screenSize: "", color: "", RAM: "", ROM: "", images: [] },
      ],
    });
  };

  // Variant input change handler
  const handleVariantChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVariants = [...formData.variants];
    updatedVariants[index][name] = value;
    setFormData({ ...formData, variants: updatedVariants });
  };

  // Handle adding multiple images to a variant
  const handleAddVariantImage = (index) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[index].images.push(null); // Add a placeholder for a new image
    setFormData({ ...formData, variants: updatedVariants });
  };

  // Handle image upload for a specific variant and image index
  const handleVariantImageChange = (variantIndex, imageIndex, e) => {
    const file = e.target.files[0];
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].images[imageIndex] = file; // Update specific image
    setFormData({ ...formData, variants: updatedVariants });
  };

  // Remove an image from a variant
  const handleRemoveVariantImage = (variantIndex, imageIndex) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[variantIndex].images.splice(imageIndex, 1); // Remove specific image
    setFormData({ ...formData, variants: updatedVariants });
  };

  // Remove a variant
  const handleRemoveVariant = (index) => {
    setFormData({
      ...formData,
      variants: formData.variants.filter((_, i) => i !== index),
    });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addProduct(formData);
      if (response) {
        console.log("Product added successfully:", response);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Basic Fields */}
        <TextField
          fullWidth
          label="Product Name"
          variant="outlined"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Brand"
          variant="outlined"
          margin="normal"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Category"
          variant="outlined"
          margin="normal"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Stock"
          variant="outlined"
          margin="normal"
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
        />
          {/* Price */}
          <Typography variant="h6">Price Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="MRP"
              type="number"
              variant="outlined"
              margin="normal"
              name="MRP"
              value={formData.price.MRP}
              onChange={handlePriceChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Cost"
              variant="outlined"
              margin="normal"
              type="number"
              name="cost"
              value={formData.price.cost}
              onChange={handlePriceChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              variant="outlined"
              margin="normal"
                type="number"
              name="discountPercent"
              value={formData.price.discountPercent}
              onChange={handlePriceChange}
            />
          </Grid>
        </Grid>
  {/* Warranty */}
  <TextField
          fullWidth
          label="Warranty"
          variant="outlined"
          margin="normal"
          name="warranty"
          value={formData.warranty}
          onChange={handleInputChange}
        />
        {/* Ratings */}
        <Typography variant="h6">Ratings</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Average Rating"
              variant="outlined"
              margin="normal"
              name="average"
              value={formData.ratings.average}
              onChange={handleRatingsChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Total Reviews"
              variant="outlined"
              margin="normal"
                type="number"
              name="totalReviews"
              value={formData.ratings.totalReviews}
              onChange={handleRatingsChange}
            />
          </Grid>
        </Grid>

        {/* Highlights */}
        <TextField
          fullWidth
          label="Highlights (comma separated)"
          variant="outlined"
          margin="normal"
          name="highlights"
          value={formData.highlights.join(", ")}
          onChange={(e) =>
            setFormData({
              ...formData,
              highlights: e.target.value.split(",").map((item) => item.trim()),
            })
          }
        />

        {/* Specifications */}
      <Typography variant="h6" gutterBottom>
        Specifications
      </Typography>
      {formData.specifications.map((spec, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Heading"
              variant="outlined"
              name="heading"
              value={spec.heading}
              onChange={(e) => handleSpecificationChange(index, e)}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Value"
              variant="outlined"
              name="value"
              value={spec.value}
              onChange={(e) => handleSpecificationChange(index, e)}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton color="error" onClick={() => handleRemoveSpecification(index)}>
              <RemoveCircle />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button
        startIcon={<AddCircle />}
        variant="contained"
        color="primary"
        onClick={handleAddSpecification}
        style={{ marginTop: "16px" }}
      >
        Add Specification
      </Button>
  

        {/* Variants */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Variants
        </Typography>
        {formData.variants.map((variant, variantIndex) => (
          <Box key={variantIndex} sx={{ mb: 3, border: "1px solid #ccc", p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Screen Size"
                  name="screenSize"
                  value={variant.screenSize}
                  onChange={(e) => handleVariantChange(variantIndex, e)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Color"
                  name="color"
                  value={variant.color}
                  onChange={(e) => handleVariantChange(variantIndex, e)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="RAM"
                  name="RAM"
                  value={variant.RAM}
                  onChange={(e) => handleVariantChange(variantIndex, e)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="ROM"
                  name="ROM"
                  value={variant.ROM}
                  onChange={(e) => handleVariantChange(variantIndex, e)}
                />
              </Grid>
            </Grid>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Images:
            </Typography>
            {variant.images.map((image, imageIndex) => (
              <Grid container spacing={2} key={imageIndex}>
                <Grid item xs={9}>
                  <Button variant="outlined" component="label" fullWidth>
                    Upload Image
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        handleVariantImageChange(variantIndex, imageIndex, e)
                      }
                    />
                  </Button>
                  {image && (
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {image.name}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={3}>
                  <IconButton
                    color="error"
                    onClick={() =>
                      handleRemoveVariantImage(variantIndex, imageIndex)
                    }
                  >
                    <Delete />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Button
              onClick={() => handleAddVariantImage(variantIndex)}
              startIcon={<AddCircle />}
              sx={{ mt: 2 }}
            >
              Add Image
            </Button>
            <IconButton
              color="error"
              onClick={() => handleRemoveVariant(variantIndex)}
              sx={{ mt: 2 }}
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
        <Button
          onClick={handleAddVariant}
          startIcon={<AddCircle />}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Add Variant
        </Button>

        {/* Submit */}
        <Button variant="contained" type="submit" sx={{ mt: 3 }}>
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
