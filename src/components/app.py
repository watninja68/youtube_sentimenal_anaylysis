from flask import Flask, request, jsonify
import youtube_dl
app = Flask(__name__)
@app.route('/analyze', methods=['POST'])
def analyze_video():
    # Retrieve the YouTube link from the request
    youtube_link = request.json['youtube_link']

    # Use a library like youtube-dl to extract comments from the YouTube video
    # ... Code for extracting comments goes here ...
def extract_comments(youtube_url):
    ydl_opts = {
        'extract_flat': 'comments',
    }

    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        try:
            info_dict = ydl.extract_info(youtube_url, download=False)
            comments = info_dict.get('comments', [])
            return comments
        except youtube_dl.DownloadError as e:
            print(f'Error extracting comments: {str(e)}')
            return []



    # Pass the comments to your ML model for analysis
    # ... Code for ML model inference goes here ...

    # Return the rating as a JSON response
    return jsonify({'rating': rating})
app.add_url_rule('/analyze', 'analyze_video', analyze_video, methods=['POST'])
if __name__ == '__main__':
    app.run(debug=True)
