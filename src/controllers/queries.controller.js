import Query from "../models/Query"
import { Configuration, OpenAIApi } from "openai";
import { generatePrompt } from "../helpers/promptGenerator";

const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: "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",
    
});
const openai = new OpenAIApi(configuration);

export const generateResponse = async (req, res) => {
    const text = req.body.text || '';
    const sourceLang = req.body.sourceLang || '';
    const targetLang = req.body.targetLang || '';
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        });
        return;
    }
    if (text.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a valid text",
            }
        });
        return;
    }
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(text, sourceLang, targetLang),
            temperature: 0.6,
        });
        res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: 'An error occurred during your request.',
                }
            });
        }
    }
}
export const getQueries = async (req, res) => {
    try {
        const queries = await Query.find();
        res.status(200).json({ success: true, data: queries });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const createQuery = async (req, res) => {
    const { prompt, response } = req.body;
    try {
        const newQuery = new Query({ prompt, response });
        await newQuery.save();
        res.status(201).json({ success: true, data: newQuery });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

export const deleteQuery = async (req, res) => {
    const { id } = req.params;
    try {
        await Query.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Query deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
