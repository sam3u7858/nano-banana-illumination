
import { GoogleGenAI, Modality } from '@google/genai';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface EditImageResponse {
  text?: string;
  imageBase64?: string;
}

export const editImageWithPrompt = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<EditImageResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    const result: EditImageResponse = {};
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.text) {
          result.text = part.text;
        } else if (part.inlineData) {
          result.imageBase64 = part.inlineData.data;
        }
      }
    }
    
    if (!result.imageBase64) {
        throw new Error("AI did not return an edited image.");
    }

    return result;
  } catch (error) {
    console.error('Error editing image with Gemini:', error);
    if (error instanceof Error) {
        throw new Error(`Failed to edit image: ${error.message}`);
    }
    throw new Error('An unknown error occurred while editing the image.');
  }
};
