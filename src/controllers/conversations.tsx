import { APIConst } from "@/config/APIConstants";
import axios from "@/utils/axios";

export const useConversations = () => {
  const addTagsController = async (values: any) => {
    try {
      const res = await axios.post(`${APIConst.tagsAdd}`, { values });
      return res;
    } catch (error: any) {
      throw error;
    }
  };

  const updateContactController = async (values: any) => {
    try {
      const res = await axios.put(
        "https://stoplight.io/mocks/highlevel/integrations/39582863/contacts/ocQHyuzHvysMo5N5VsXc",
        values
      );
      return res;
    } catch (error: any) {
      throw error;
    }
  };

  return {
    addTagsController,
    updateContactController,
  };
};
