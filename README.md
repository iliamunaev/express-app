## Express App / DevOps  with Docker Hub and GitHub Actions
Simple app to test [Watchtower](https://github.com/containrrr/watchtower).   

Tech: Docker, docker compose, GitHub Actions, Docker Hub, Watchtower

1. Pull image with Docker
```bash
docker pull ilyamunaev/express-app
```

2. Start app container

```bash
docker run -p 8080:8080 ilyamunaev/express-app
```

3. Access with browser http://localhost:8080


4. If you can see link to Youtube "Queen - We Are The Champions", everything set up correctly.

Ilia Munaev, software developer  
Contact: ilyamunaev@gmail.com