* {
    padding: 0;
    margin: 0;
}

ul,
li {
    list-style-type: none;
}
/*主体部分*/

#content {
    width: 100%;
    height: 100%;
    /* top: 20%;
    left: 20%; */
    overflow: hidden;
    position: absolute;
}

.content-wrap {
    position: relative;
}

.content-wrap > li {
    background: #CAE1FF;
    color: red;
    float: left;
    overflow: hidden;
    position: relative;
}

li:nth-child(2) {
    background: #9BCD9B;
}

li:nth-child(3) {
    background: yellow;
}

button {
    width: 100px;
    height: 50px;
}

.button {
    position: absolute;
    bottom: 0;
}