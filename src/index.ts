/**
 * handyCollapse
 * https://github.com/sk-rt/handy-collapse
 * Copyright (c) 2019  Ryuta Sakai
 * Licensed under the MIT license.
 */

export interface Options {
    nameSpace: string;
    toggleButtonAttr: string;
    toggleContentAttr: string;
    activeClass: string;
    isAnimation: boolean;
    closeOthers: boolean;
    animationSpeed: number;
    cssEasing: string;
    onSlideStart: (isOpen: boolean, id: string) => void;
    onSlideEnd: (isOpen: boolean, id: string) => void;
}
interface ItemState {
    [key: string]: {
        isOpen: boolean;
        isAnimating: boolean;
    };
}
export default class HandyCollapse {
    toggleContentEls: NodeListOf<HTMLElement>;
    toggleButtonEls: NodeListOf<HTMLElement>;
    private itemsState: ItemState = {};
    options: Options;
    constructor(_options: Partial<Options> = {}) {
        const nameSpace = typeof _options === "object" && "nameSpace" in _options ? _options.nameSpace : "hc";
        const defaultOptions = {
            nameSpace: "hc",
            toggleButtonAttr: `data-${nameSpace}-control`,
            toggleContentAttr: `data-${nameSpace}-content`,
            activeClass: "is-active",
            isAnimation: true,
            closeOthers: true,
            animationSpeed: 400,
            cssEasing: "ease-in-out",
            onSlideStart: () => {},
            onSlideEnd: () => {}
        };
        this.options = {
            ...defaultOptions,
            ..._options
        };
        this.toggleContentEls = document.querySelectorAll(`[${this.options.toggleContentAttr}]`);
        this.toggleButtonEls = document.querySelectorAll(`[${this.options.toggleButtonAttr}]`);
        this.init();
    }
    private init() {
        if (this.toggleContentEls) {
            this.initContentsState(this.toggleContentEls);
        }
        if (this.toggleButtonEls.length > 0) {
            this.handleButtonsEvent(this.toggleButtonEls);
        }
    }
    /**
     * init Param & show/hide items
     */
    private initContentsState(contentEls: NodeList) {
        this.itemsState = {};
        [].slice.call(contentEls).forEach((contentEl: HTMLElement) => {
            contentEl.style.overflow = "hidden";
            contentEl.style.maxHeight = "none";
            const isOpen = contentEl.classList.contains(this.options.activeClass);
            const id = contentEl.getAttribute(this.options.toggleContentAttr);
            if (!id) return;
            this.setItemState(id, isOpen);
            if (!isOpen) {
                this.close(id, false, false);
            } else {
                this.open(id, false, false);
            }
        });
    }

    /**
     * Add toggleButton Listners
     */
    handleButtonsEvent(buttonElement: NodeList) {
        if (!buttonElement || buttonElement.length === 0) return;
        [].slice.call(buttonElement).forEach((buttonEl: HTMLElement) => {
            const id = buttonEl.getAttribute(this.options.toggleButtonAttr);
            if (id) {
                buttonEl.addEventListener(
                    "click",
                    e => {
                        e.preventDefault();
                        this.toggleSlide(id, !!buttonEl);
                    },
                    false
                );
            }
        });
    }
    /**
     * Set state
     */
    private setItemState(id: string, isOpen: boolean) {
        this.itemsState[id] = {
            isOpen: isOpen,
            isAnimating: false
        };
    }

    /**
     * button click listner
     * @param  id - accordion ID
     */
    toggleSlide(id: string, isRunCallback = true) {
        if (this.itemsState[id].isAnimating) return;
        if (this.itemsState[id].isOpen === false) {
            this.open(id, isRunCallback, this.options.isAnimation);
        } else {
            this.close(id, isRunCallback, this.options.isAnimation);
        }
    }
    /**
     * Open accordion
     * @param  id - accordion ID
     */
    open(id: string, isRunCallback = true, isAnimation = true) {
        if (!id) return;
        if (!Object.prototype.hasOwnProperty.call(this.itemsState, id)) {
            this.setItemState(id, false);
        }
        this.itemsState[id].isAnimating = true;

        //Close Others
        if (this.options.closeOthers) {
            [].slice.call(this.toggleContentEls).forEach((contentEl: HTMLElement) => {
                const closeId = contentEl.getAttribute(this.options.toggleContentAttr);
                if (closeId && closeId !== id) this.close(closeId, false, isAnimation);
            });
        }
        if (isRunCallback !== false) this.options.onSlideStart(true, id);

        //Content : Set getHeight, add activeClass
        const toggleBody = document.querySelector(`[${this.options.toggleContentAttr}='${id}']`) as HTMLElement;
        const clientHeight = this.getTargetHeight(toggleBody);
        toggleBody.classList.add(this.options.activeClass);

        //Button : Add activeClass
        const toggleButton = document.querySelectorAll(`[${this.options.toggleButtonAttr}='${id}']`);
        if (toggleButton.length > 0) {
            [].slice.call(toggleButton).forEach((button: HTMLElement) => {
                button.classList.add(this.options.activeClass);
            });
        }

        if (isAnimation) {
            //Slide Animation
            toggleBody.style.overflow = "hidden";
            toggleBody.style.transition = `${this.options.animationSpeed}ms ${this.options.cssEasing}`;
            toggleBody.style.maxHeight = (clientHeight || "1000") + "px";
            setTimeout(() => {
                if (isRunCallback !== false) this.options.onSlideEnd(true, id);
                toggleBody.style.maxHeight = "none";
                toggleBody.style.transition = "";
                toggleBody.style.overflow = "";
                this.itemsState[id].isAnimating = false;
            }, this.options.animationSpeed);
        } else {
            //No Animation
            toggleBody.style.maxHeight = "none";
            toggleBody.style.overflow = "";
            this.itemsState[id].isAnimating = false;
        }
        this.itemsState[id].isOpen = true;
    }
    /**
     * Close accordion
     * @param id - accordion ID
     */
    close(id: string, isRunCallback = true, isAnimation = true) {
        if (!id) return;
        if (!Object.prototype.hasOwnProperty.call(this.itemsState, id)) {
            this.setItemState(id, false);
        }
        this.itemsState[id].isAnimating = true;
        if (isRunCallback !== false) this.options.onSlideStart(false, id);

        //Content : Set getHeight, remove activeClass
        const toggleBody = document.querySelector(`[${this.options.toggleContentAttr}='${id}']`) as HTMLElement;
        toggleBody.style.overflow = "hidden";
        toggleBody.classList.remove(this.options.activeClass);
        toggleBody.style.maxHeight = toggleBody.clientHeight + "px";
        setTimeout(() => {
            toggleBody.style.maxHeight = "0px";
        }, 5);

        //Buttons : Remove activeClass
        const toggleButton = document.querySelectorAll(`[${this.options.toggleButtonAttr}='${id}']`);
        if (toggleButton.length > 0) {
            [].slice.call(toggleButton).forEach((button: HTMLElement) => {
                button.classList.remove(this.options.activeClass);
            });
        }

        if (isAnimation) {
            //Slide Animation
            toggleBody.style.transition = `${this.options.animationSpeed}ms ${this.options.cssEasing}`;
            setTimeout(() => {
                if (isRunCallback !== false) this.options.onSlideEnd(false, id);
                toggleBody.style.transition = "";
                this.itemsState[id].isAnimating = false;
            }, this.options.animationSpeed);
        } else {
            //No Animation
            this.options.onSlideEnd(false, id);
            this.itemsState[id].isAnimating = false;
        }
        if (Object.prototype.hasOwnProperty.call(this.itemsState, id)) {
            this.itemsState[id].isOpen = false;
        }
    }
    /**
     * Get Elemet Height
     * @param targetEl - target Element
     * @return Height(px)
     */
    getTargetHeight(targetEl: HTMLElement): number | void {
        if (!targetEl) return;
        const cloneEl = targetEl.cloneNode(true) as HTMLElement;
        const parentEl = targetEl.parentNode;
        if (!parentEl) return;
        cloneEl.style.maxHeight = "none";
        cloneEl.style.opacity = "0";
        parentEl.appendChild(cloneEl);
        const clientHeight = cloneEl.clientHeight;
        parentEl.removeChild(cloneEl);
        return clientHeight;
    }
}
