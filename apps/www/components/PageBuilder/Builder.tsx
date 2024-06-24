import React, { useState } from 'react';
import Selector from './components/TemplateSelector/Selector';
import { PageHeaderHeading } from '../page-header';
import { Separator } from '@/registry/default/ui/separator';
import { TemplateList } from './components/TemplateList/TemplateList';
import { Progress } from '@/registry/default/ui/progress';
import { value } from './components/TemplateList';
import { TracingBeam } from '../TracingBeam/tracing-beam';

const Builder: React.FC = () => {



  return (
    <>
      <TemplateList />

    </>
  );
};

export default Builder;
