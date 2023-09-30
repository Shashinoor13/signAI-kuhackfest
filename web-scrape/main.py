from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import scrapetube

app = FastAPI()

# Define the list to store your data
data = []

# Configure CORS
origins = ["http://localhost:5173"]  # Update this with your Vite React app's URL

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/{id}/")
async def get_video(id: str):
    data = []
    search_string = id + "-asl"
    videos = scrapetube.get_search(search_string, limit=10)
    for video in videos:
        new_json = {
            "id": video["videoId"],
            "title": video["title"]["runs"][0]["text"],
        }
        data.append(new_json)
    print(data)
    return data


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
