import { JSX, ParentComponent, ParentProps, VoidComponent, VoidProps } from 'solid-js';

export type VoidSVG = VoidComponent<JSX.SvgSVGAttributes<SVGSVGElement> & VoidProps>;
export type ParentSVG = ParentComponent<JSX.SvgSVGAttributes<SVGSVGElement> & ParentProps>;
