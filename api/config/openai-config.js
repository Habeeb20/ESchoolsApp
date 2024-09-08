import {  OpenAI } from "openai";
export const configureOpenAI = () => {
    const config = {
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANISATION_ID,
    };

    const openai = new OpenAI(config)
    return openai;
};
//# sourceMappingURL=openai-config.js.map