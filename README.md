# mht2html
A simple utility to extract HTML from an MHT/MHTML file

## Build

```
$ docker built -t mht2html .
```

## Run

```
$ docker run -v <path to the folder containing target mht files>:/host_files:ro --rm mht2html task dev /host_files/<target mht file name>
```

For example, to extract HTML from ~/work/index.mht, you can use the following command:


```
$ docker run -v ~/work:/host_files:ro --rm mht2html task dev /host_files/index.mht
```

Note that the utility mounts the folder containing the MHT/MHTML file as a read-only volume.