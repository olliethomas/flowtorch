# Copyright (c) FlowTorch Development Team. All Rights Reserved
# SPDX-License-Identifier: MIT

from typing import Optional

import torch
import torch.distributions.constraints as constraints
from torch.distributions.utils import lazy_property

import flowtorch
import flowtorch.bijectors as bijectors


class Permute(bijectors.Fixed, bijectors.VolumePreserving):
    domain = constraints.real_vector
    codomain = constraints.real_vector

    # TODO: A new abstraction so can defer construction of permutation
    def __init__(self, permutation=None):
        super().__init__(param_fn=None)

        self.permutation = permutation

    def _forward(
        self,
        x: torch.Tensor,
        params: Optional[flowtorch.ParamsModule] = None,
        context: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        if self.permutation is None:
            self.permutation = torch.randperm(x.shape[-1])

        return x.index_select(-1, self.permutation)

    def _inverse(
        self,
        y: torch.Tensor,
        params: Optional[flowtorch.ParamsModule] = None,
        context: Optional[torch.Tensor] = None,
    ) -> torch.Tensor:
        if self.permutation is None:
            self.permutation = torch.randperm(y.shape[-1])

        return y.index_select(-1, self.inv_permutation)

    @lazy_property
    def inv_permutation(self):
        result = torch.empty_like(self.permutation, dtype=torch.long)
        result[self.permutation] = torch.arange(
            self.permutation.size(0), dtype=torch.long, device=self.permutation.device
        )
        return result