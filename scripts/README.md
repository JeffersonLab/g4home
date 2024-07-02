### Asciinema recording:

- comment out all echo commands in /etc/zshrc_Apple_Terminal 
- remember to set  PROMPT_EOL_MARK='' in .zshrc 

Get [agg](https://github.com/asciinema/agg) from the latest release and 
install it in the `/usr/local/bin` directory. May have to change the permissions to execute.

Run asciinema normally, for example:

```
asciinema rec demo.cast
```

Then run `agg` to create a gif:

``` 
agg --theme asciinema --font-size 50 --cols 112 --rows 22 --speed 2  ifarm.cast ifarm.gif
```

