import { JSX, ParentComponent, ParentProps, VoidComponent, VoidProps } from 'solid-js';

export type VoidSVG<T = {}> = VoidComponent<JSX.SvgSVGAttributes<SVGSVGElement> & VoidProps & T>;
export type ParentSVG<T = {}> = ParentComponent<JSX.SvgSVGAttributes<SVGSVGElement> & ParentProps>;
