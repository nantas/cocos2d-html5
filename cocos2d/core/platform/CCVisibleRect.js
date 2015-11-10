/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
 * it should represent the same rect as cc.view.getViewportRect()
 *
 * @class visibleRect
 */
cc.visibleRect = {
    topLeft:cc.p(0,0),
    topRight:cc.p(0,0),
    top:cc.p(0,0),
    bottomLeft:cc.p(0,0),
    bottomRight:cc.p(0,0),
    bottom:cc.p(0,0),
    center:cc.p(0,0),
    left:cc.p(0,0),
    right:cc.p(0,0),
    width:0,
    height:0,

    /**
     * initialize
     * @param {Rect} visibleRect
     */
    init:function(visibleRect){

        var w = this.width = visibleRect.width;
        var h = this.height = visibleRect.height;
        var l = visibleRect.x,
            b = visibleRect.y,
            t = b + h,
            r = l + w;

        //top
        this.topLeft.x = l;
        this.topLeft.y = t;
        this.topRight.x = r;
        this.topRight.y = t;
        this.top.x = l + w/2;
        this.top.y = t;

        //bottom
        this.bottomLeft.x = l;
        this.bottomLeft.y = b;
        this.bottomRight.x = r;
        this.bottomRight.y = b;
        this.bottom.x = l + w/2;
        this.bottom.y = b;

        //center
        this.center.x = l + w/2;
        this.center.y = b + h/2;

        //left
        this.left.x = l;
        this.left.y = b + h/2;

        //right
        this.right.x = r;
        this.right.y = b + h/2;
    }
};

/**
 * Top left coordinate of the screen related to the game scene.
 * @property topLeft
 * @type {Vec2}
 */

/**
 * Top right coordinate of the screen related to the game scene.
 * @property topRight
 * @type {Vec2}
 */

/**
 * Top center coordinate of the screen related to the game scene.
 * @property top
 * @type {Vec2}
 */

/**
 * Bottom left coordinate of the screen related to the game scene.
 * @property bottomLeft
 * @type {Vec2}
 */

/**
 * Bottom right coordinate of the screen related to the game scene.
 * @property bottomRight
 * @type {Vec2}
 */

/**
 * Bottom center coordinate of the screen related to the game scene.
 * @property bottom
 * @type {Vec2}
 */

/**
 * Center coordinate of the screen related to the game scene.
 * @property center
 * @type {Vec2}
 */

/**
 * Left center coordinate of the screen related to the game scene.
 * @property left
 * @type {Vec2}
 */

/**
 * Right center coordinate of the screen related to the game scene.
 * @property right
 * @type {Vec2}
 */

/**
 * Width of the screen.
 * @property width
 * @type {Number}
 */

/**
 * Height of the screen.
 * @property height
 * @type {Number}
 */

