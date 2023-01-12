import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration ({
  apiKey: process.env.OPENAI_KEY,
  organization: process.env.ORGANIZATION
})

const openAI = new OpenAIApi(configuration)

const translate = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const completion = await openAI.createCompletion({
      model: 'text-davinci-003',
      prompt: req.body.prompt,
      temperature: 0.7,
      max_tokens: 4000,
    })
    res.send(completion.data.choices[0].text)
  } catch (error) {
    res.status(500).json({ Error: 'Cannot process your request' })
  }
}

export default translate;