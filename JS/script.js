const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('mytext');
const responseTextarea = document.getElementById('response');

const API_KEY = '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';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mytext = mytextInput.value.trim();

    if (mytext) {
        try {
            // Check if the question is related to psychology
            const isPsychologyQuestion = isPsychologyRelated(mytext);

            if (isPsychologyQuestion) {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`,
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [{ role: 'user', content: mytext }],
                        temperature: 1.0,
                        top_p: 0.7,
                        n: 1,
                        stream: false,
                        presence_penalty: 0,
                        frequency_penalty: 0,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    responseTextarea.value = data.choices[0].message.content;
                } else {
                    responseTextarea.value = 'Error: Unable to process your request.';
                }
            } else {
                responseTextarea.value = 'This is not within my area of expertise (psychology).';
            }
        } catch (error) {
            console.error(error);
            responseTextarea.value = 'Error: Unable to process your request.';
        }
    }
});

// Function to check if the question is related to psychology
function isPsychologyRelated(question) {
    // Add your logic to identify psychology-related questions
    // For example, you can check for keywords like "psychology," "mental health," etc.
    const psychologyKeywords = ['psychology', 'mental health', 'therapy', 'counseling', 'disorder', 'anxiety', 'fear', 'stress', 'depression', 'trauma', 'phobia', 'obsession', 'compulsion', 'therapy', 'cognitive', 'behavioral', 'psychiatry', 'psychiatric', 'mind', 'emotional', 'well-being', 'psychological', 'treatment', 'medication', 'diagnosis', 'self-esteem', 'identity', 'psychotherapy', 'mindfulness', 'subconscious', 'consciousness', 'personality', 'schizophrenia', 'bipolar', 'ADHD', 'PTSD', 'OCD', 'eating disorder', 'suicidal', 'self-harm', 'therapy session'];
    return psychologyKeywords.some(keyword => question.toLowerCase().includes(keyword));
}
