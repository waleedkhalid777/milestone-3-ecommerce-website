import axios from "axios";

const trackShipment = async (trackingId: any) => {
    try {
      const response = await axios.get(`/api/trackShipment/${trackingId}`);
      return response.data.trackingStatus;
    } catch (error) {
      console.error('Error tracking shipment:', error);
    }
  };
  