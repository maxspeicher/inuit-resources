/*
(c) Copyright Adrime BV - The Netherlands
All rights reserved

It is illegal to modify, disassemble, sell, copy or publish  this software 
or any part thereof. The use of this software is only permitted with the 
prior and express written permission of Adrime BV, the Netherlands.

for more information please contact: info@adrime.com
*/

if(!q1d(screenad.campaignfreq))screenad.campaignfreq=1;
if(!q1d(screenad.flightfreq))screenad.flightfreq=1;

q1cl=q1f7();

for(q11 in screenad.eventtrackers){if(typeof(screenad.eventtrackers[q11])=='string')q1cl.q1gl(screenad.eventtrackers[q11],'*',false);}
for(q11 in screenad.clicktrackers){if(typeof(screenad.clicktrackers[q11])=='string')q1cl.q1gl(screenad.clicktrackers[q11],'scrc',false,[['scrc','click']]);}
for(q11 in screenad.clicks){if(typeof(screenad.clicks[q11])=='string'){if(q11==0)var q1hq='default';else q1hq='extra'+q11;q1_=new q1bH();q1_.q1dg(q1cl,q1hq,screenad.clicks[q11],'_blank');q1cl.q1gT(q1_);}}

q1_=new q1dx();
q1_.q1dg('screenad','width=auto&height=auto&hor=center&ver=center&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto');
q1cl.q1gU(q1_);

q1_=new q1et();             
q1_.q1dg(q1cl,'alt_banner_120x88.jpg',screenad.width,screenad.height,'');
q1cl.q1gQ(q1_);

q1_=new q1ez();
q1_.q1dg(q1cl,'banner_120x88.swf',screenad.width,screenad.height,'',8,'opaque','LT','exactfit');
q1cl.q1gQ(q1_);

if(screenad.id=='28c12c651855868a9cd7e130cacbf952') q1cl.q1d_();