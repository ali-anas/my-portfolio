import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Fade } from "@material-ui/core";
import { shadows } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  root: {
    margin: "24px",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    // boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
  },
  media: {
    height: 140,
  },
});

function handleGoToGithub(event) {
  console.log(event);
}

export default function ImgMediaCard({ loading, project }) {
  const classes = useStyles();
  // let githubUrl = props.project.github_url;

  return (
    <div className={classes.root}>
      <Fade
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <Card elevation={0} square>
          <CardActionArea>
            {loading ? (
              <Skeleton
                animation={false}
                variant="rect"
                className={classes.media}
              />
            ) : (
              <CardMedia
                className="classes.media"
                component="img"
                alt="Project"
                height="140"
                src={project.imageUrl}
                title="Contemplative Reptile"
              />
            )}
            <CardContent>
              {/* {loading ? (
                <Skeleton
                  animation="wave"
                  width="60%"
                  height={30}
                  style={{ margin: "0 auto" }}
                />
              ) : ( */}
              <Typography gutterBottom variant="h5" component="h2">
                {loading ? <Skeleton /> : project.title}
              </Typography>
              {/* )} */}
              <Typography variant="body2" color="textSecondary" component="p">
                {loading ? (
                  <React.Fragment>
                    <Skeleton style={{ marginBottom: 6 }} />
                    <Skeleton style={{ width: "80%" }} />
                  </React.Fragment>
                ) : (
                  project.intro
                )}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rect"
                width="15%"
                height={20}
              />
            ) : (
              <Button size="small" color="primary">
                More...
              </Button>
            )}

            {loading ? (
              <Skeleton
                animation="wave"
                variant="rect"
                width="15%"
                height={20}
              />
            ) : (
              <Button size="small" color="primary" onClick={handleGoToGithub}>
                Github
              </Button>
            )}
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rect"
                width="15%"
                height={20}
              />
            ) : (
              <Button size="small" color="primary">
                Live
              </Button>
            )}
          </CardActions>
        </Card>
      </Fade>
    </div>
  );
}
