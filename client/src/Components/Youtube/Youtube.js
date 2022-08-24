import React, { useState, useEffect } from "react";

// MY API KEY
// AIzaSyDOFms63JjcPdS-aFGNDlwoJtebklw0v1I

// GET YOUTUBE CHANNAL ID
// https://www.googleapis.com/youtube/v3/channels?key={YOUR_API_KEY}&forUsername={CHANNEL_NAME}&part=id

// GET YOUTUBE CHANNAL ID
// https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDOFms63JjcPdS-aFGNDlwoJtebklw0v1I&forUsername=c/EvangadiTech&part=id

// APPLE ID
// UCE_M8A5yxnLfW0KghEeajjw

// Final API request URL
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10

function YoutubeMy() {
	const [youTubeVideos, setyouTubeVideos] = useState([]);

	useEffect(() => {
		fetch(
			`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNAL_ID}&part=snippet,id&order=date&maxResults=9`
		)
			.catch((err) =>
				console.log(`there is error${err} in fetch process`)
			)
			.then((res) => res.json())
			.then((data) => {
				const videos = data.items;
				setyouTubeVideos(videos);
			});
	}, []);

	console.log(youTubeVideos);

	return (
		<div className="allVideosWrapper">
			<div className="container">
				<div className="row h-100 align-items-center justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper bold video-title-wrapper p-5">
							Latest Videos
						</div>
					</div>
					{youTubeVideos?.map((singleVideo) => {
						let vidId = singleVideo.id.videoId;
						let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
						let videoWrapper = (
							<div
								key={vidId}
								className="col-sm-12 col-md-4"
							>
								<div className="singleVideoWrapper">
									<div className="videoThumbnail">
										<a
											href={vidLink}
											target="_blank"
										>
											<img
												src={
													singleVideo
														.snippet
														.thumbnails
														.high
														.url
												}
											/>
										</a>
									</div>
									<div className="videoInfoWrapper">
										<div className="videoTitle">
											<a
												href={
													vidLink
												}
												target="_blank"
											>
												{
													singleVideo
														.snippet
														.title
												}
											</a>
										</div>
										<div className="videoDesc">
											{
												singleVideo
													.snippet
													.description
											}
										</div>
									</div>
								</div>
							</div>
						);
						return videoWrapper;
					})}

					{/* {videoWrapper} */}
				</div>
			</div>
		</div>
	);
}

export default YoutubeMy;
