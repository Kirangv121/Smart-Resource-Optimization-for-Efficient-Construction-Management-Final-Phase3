// Carbon footprint calculation service

export async function calculateMaterialFootprint(material, quantity, unit) {
  // Mock data for demonstration
  const mockCarbonFootprint = {
    data: {
      attributes: {
        carbon_kg: quantity * 100, // Simplified calculation
      },
    },
  }
  return Promise.resolve(mockCarbonFootprint)
}

export async function calculateFuelFootprint(fuelType, quantity, unit) {
  // Mock data for demonstration
  const mockCarbonFootprint = {
    data: {
      attributes: {
        carbon_kg: quantity * 10, // Simplified calculation
      },
    },
  }
  return Promise.resolve(mockCarbonFootprint)
}

export async function calculateConstructionFootprint(materials) {
  // Mock calculation for demonstration
  let totalCO2 = 0
  for (const material of materials) {
    totalCO2 += material.quantity * 100 // Simplified calculation
  }
  return Promise.resolve({ totalCO2, detailedResults: [] })
}

export function getMaterialOptions() {
  return [
    { value: "concrete", label: "Concrete" },
    { value: "steel", label: "Steel" },
    { value: "wood", label: "Wood" },
    { value: "glass", label: "Glass" },
    { value: "aluminum", label: "Aluminum" },
    { value: "plastic", label: "Plastic" },
    { value: "insulation", label: "Insulation" },
    { value: "brick", label: "Brick" },
    { value: "asphalt", label: "Asphalt" },
  ]
}

export function getFuelOptions() {
  return [
    { value: "diesel", label: "Diesel" },
    { value: "gasoline", label: "Gasoline" },
    { value: "natural_gas", label: "Natural Gas" },
    { value: "propane", label: "Propane" },
  ]
}
