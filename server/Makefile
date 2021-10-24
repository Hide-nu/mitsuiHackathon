deploy:
	pack build gcr.io/third-zephyr-329309/chat:latest --path server --builder gcr.io/buildpacks/builder:v1
	gcr.io/third-zephyr-329309/chat:latest
	gcloud run deploy chat --image gcr.io/third-zephyr-329309/chat:latest --region asia-northeast1 --allow-unauthenticated